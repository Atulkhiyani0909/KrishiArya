import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export function SignIn() {
     const { t } = useTranslation();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      
      <div className="min-h-screen bg-gradient-to-br from-white to-green-50 px-4 py-8 pt-24">
        <div className="container mx-auto max-w-7xl">
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#16a34a] mb-8 text-center">{t('signin.title')}</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{t('signin.Phone')}</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 sm:px-4 rounded-l-xl border-2 border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm sm:text-base font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="flex-1 px-3 sm:px-4 py-3 rounded-r-xl border-2 border-gray-200 focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors text-sm sm:text-base"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">{t('signin.PhoneFormat')}</p>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">{t('signin.password')}</label>
                <input
                  type="password"
                  required
                  className="block w-full px-3 sm:px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16a34a] focus:ring focus:ring-green-200 transition-colors text-sm sm:text-base"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 sm:py-4 px-6 rounded-full text-white bg-[#16a34a] hover:bg-[#15803d] font-semibold text-base sm:text-lg shadow-lg shadow-green-200 transition-all transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:ring-offset-2"
              >
                {t('signin.Submit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}