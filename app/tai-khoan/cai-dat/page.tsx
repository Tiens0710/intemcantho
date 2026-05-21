"use client";

import { motion } from "framer-motion";
import {
  User,
  Lock,
  Camera,
  Save,
  Eye,
  EyeOff,
  Smartphone,
  Mail,
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<"profile" | "password">("profile");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Profile state
  const [profile, setProfile] = useState({
    firstName: "Nguyễn",
    lastName: "Văn A",
    email: "nguyenvana@email.com",
    phone: "0985 463 403",
    birthday: "1995-06-15",
    gender: "male",
  });

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1500);
  };

  const sections = [
    { key: "profile" as const, label: "Thông tin cá nhân", icon: User },
    { key: "password" as const, label: "Đổi mật khẩu", icon: Lock },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-1">Cài đặt tài khoản</h2>
        <p className="text-sm text-gray-500">Quản lý thông tin và bảo mật tài khoản</p>
      </div>

      {/* Section Tabs (mobile) */}
      <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <button
              key={s.key}
              onClick={() => setActiveSection(s.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                activeSection === s.key
                  ? "bg-amber-800 text-white"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              {s.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        {/* Sidebar Tabs (desktop) */}
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl border border-gray-100 p-2 sticky top-24">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveSection(s.key)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === s.key
                      ? "bg-amber-50 text-amber-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Profile Section */}
          {activeSection === "profile" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              {/* Avatar */}
              <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-100">
                <div className="relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    A
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Camera className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                <div>
                  <p className="text-base font-semibold text-gray-900">Ảnh đại diện</p>
                  <p className="text-xs text-gray-500 mt-0.5">JPG, PNG. Tối đa 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Họ</label>
                  <input
                    type="text"
                    value={profile.firstName}
                    onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Tên</label>
                  <input
                    type="text"
                    value={profile.lastName}
                    onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Số điện thoại</label>
                  <div className="relative">
                    <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Ngày sinh</label>
                  <input
                    type="date"
                    value={profile.birthday}
                    onChange={(e) => setProfile({ ...profile, birthday: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Giới tính</label>
                  <div className="flex gap-2">
                    {[
                      { key: "male", label: "Nam" },
                      { key: "female", label: "Nữ" },
                      { key: "other", label: "Khác" },
                    ].map((g) => (
                      <button
                        key={g.key}
                        onClick={() => setProfile({ ...profile, gender: g.key })}
                        className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                          profile.gender === g.key
                            ? "border-amber-400 bg-amber-50 text-amber-800"
                            : "border-gray-200 text-gray-600 hover:border-gray-300"
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="flex items-center gap-2 px-6 py-2.5 bg-amber-800 text-white rounded-xl text-sm font-medium hover:bg-amber-900 transition-colors disabled:opacity-50"
                >
                  <Save className="w-4 h-4" />
                  {isSaving ? "Đang lưu..." : "Lưu thay đổi"}
                </button>
              </div>
            </motion.div>
          )}

          {/* Password Section */}
          {activeSection === "password" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-6">Đổi mật khẩu</h3>
              <div className="space-y-5 max-w-md">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Mật khẩu hiện tại</label>
                  <div className="relative">
                    <input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Mật khẩu mới</label>
                  <div className="relative">
                    <input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="w-full px-3.5 py-2.5 pr-10 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                    />
                    <button
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-1 flex-1 rounded-full bg-gray-200" />
                    ))}
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">Mật khẩu phải có ít nhất 8 ký tự</p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1.5">Xác nhận mật khẩu mới</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
                  />
                </div>
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-2.5 bg-amber-800 text-white rounded-xl text-sm font-medium hover:bg-amber-900 transition-colors"
                >
                  <Lock className="w-4 h-4" />
                  Cập nhật mật khẩu
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}