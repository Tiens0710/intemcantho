import { ENV } from "./env";

export interface StorageResult {
  key: string;
  url: string;
}

/**
 * Upload file to S3 storage via Forge API
 */
export async function storagePut(
  relKey: string,
  data: Buffer | string,
  contentType?: string
): Promise<StorageResult> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    throw new Error("Storage not configured");
  }

  try {
    const forgeUrl = new URL(
      "v1/storage/presign/put",
      ENV.forgeApiUrl.replace(/\/+$/, "") + "/"
    );
    forgeUrl.searchParams.set("path", relKey);
    if (contentType) {
      forgeUrl.searchParams.set("contentType", contentType);
    }

    const presignResp = await fetch(forgeUrl, {
      headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
    });

    if (!presignResp.ok) {
      const body = await presignResp.text().catch(() => "");
      throw new Error(`Presign failed: ${presignResp.status} ${body}`);
    }

    const { url: presignedUrl } = (await presignResp.json()) as { url: string };
    if (!presignedUrl) {
      throw new Error("Empty presigned URL");
    }

    // Upload to S3 using presigned URL
    const uploadResp = await fetch(presignedUrl, {
      method: "PUT",
      headers: {
        "Content-Type": contentType || "application/octet-stream",
      },
      body: data,
    });

    if (!uploadResp.ok) {
      throw new Error(`Upload failed: ${uploadResp.status}`);
    }

    // Get presigned GET URL
    const getUrl = new URL(
      "v1/storage/presign/get",
      ENV.forgeApiUrl.replace(/\/+$/, "") + "/"
    );
    getUrl.searchParams.set("path", relKey);

    const getResp = await fetch(getUrl, {
      headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
    });

    if (!getResp.ok) {
      throw new Error(`Get presign failed: ${getResp.status}`);
    }

    const { url: getUrl_result } = (await getResp.json()) as { url: string };

    return {
      key: relKey,
      url: getUrl_result || `/manus-storage/${relKey}`,
    };
  } catch (error) {
    console.error("[Storage] Put error:", error);
    throw error;
  }
}

/**
 * Get presigned URL for file
 */
export async function storageGet(
  relKey: string,
  expiresIn?: number
): Promise<StorageResult> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    throw new Error("Storage not configured");
  }

  try {
    const forgeUrl = new URL(
      "v1/storage/presign/get",
      ENV.forgeApiUrl.replace(/\/+$/, "") + "/"
    );
    forgeUrl.searchParams.set("path", relKey);
    if (expiresIn) {
      forgeUrl.searchParams.set("expiresIn", expiresIn.toString());
    }

    const resp = await fetch(forgeUrl, {
      headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
    });

    if (!resp.ok) {
      throw new Error(`Get presign failed: ${resp.status}`);
    }

    const { url } = (await resp.json()) as { url: string };

    return {
      key: relKey,
      url: url || `/manus-storage/${relKey}`,
    };
  } catch (error) {
    console.error("[Storage] Get error:", error);
    throw error;
  }
}

/**
 * Delete file from storage
 */
export async function storageDelete(relKey: string): Promise<void> {
  if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
    throw new Error("Storage not configured");
  }

  try {
    const forgeUrl = new URL(
      "v1/storage/delete",
      ENV.forgeApiUrl.replace(/\/+$/, "") + "/"
    );
    forgeUrl.searchParams.set("path", relKey);

    const resp = await fetch(forgeUrl, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
    });

    if (!resp.ok) {
      throw new Error(`Delete failed: ${resp.status}`);
    }
  } catch (error) {
    console.error("[Storage] Delete error:", error);
    throw error;
  }
}
