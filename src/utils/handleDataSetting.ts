import envConfig from "../../config";

export const handleDataSetting = async (settingData: any[]) => {
  if (settingData.length === 0 && Array.isArray(settingData)) return;
  const settings = settingData?.reduce((acc: any, setting: any) => {
    acc[setting.KeySetting] = setting.DataSetting;
    return acc;
  }, {});
  const {
    Logo,
    Hotline,
    Phone,
    Email,
    Slogan,
    Map,
    TermsAndConditions,
    PrivacyPolicy,
    Contentproduction,
    BusinessPhilosophy,
    BusinessLicense,
    CareerGoals,
    Address,
    AboutCompany,
    CompanyName,
    Compliance,
    Facebook,
    Zalo,
    Instagram,
    Twitter,
    Pinterest,
    LinkedIn,
    Youtube,
    FacebookChat,
    ImageABoutUs,
    ContactInformation,
    WarrantyPolicy,
    PaymentGuide,
    Tiktok,
    Website,
    WebsiteUs,
    PrivacyPolicyV2,
    TermsPolicy,
    ServiceCancellationPolicy,
    IntroduceContent1,
    IntroduceContent2,
    PaymentMethod,
    ImageAboutUsHome,
    BgFooter,
    Bg,
  } = settings;
  let LogoUrl = envConfig.NEXT_PUBLIC_CDN + Logo?.replace(",", "");
  let ImageABoutUsUrl =
    envConfig.NEXT_PUBLIC_CDN +
    (ImageABoutUs || "/images/bg-header.jpg")?.replace(",", "");
  let ImageAboutUsHomeUrl =
    envConfig.NEXT_PUBLIC_CDN + ImageAboutUsHome?.replace(",", "");
  let BgFooterUrl = envConfig.NEXT_PUBLIC_CDN + BgFooter?.replace(",", "");
  let BgUrl = envConfig.NEXT_PUBLIC_CDN + Bg?.replace(",", "");

  let data = {
    Logo: LogoUrl,
    Email,
    Phone,
    Slogan,
    Hotline,
    AboutCompany,
    ImageABoutUs: ImageABoutUsUrl,
    Map,
    Contentproduction,
    Address,
    PrivacyPolicy,
    TermsAndConditions,
    CompanyName,
    Compliance,
    Facebook,
    Zalo,
    BusinessPhilosophy,
    BusinessLicense,
    CareerGoals,
    ContactInformation,
    WarrantyPolicy,
    PaymentGuide,
    Tiktok,
    Instagram,
    Twitter,
    Pinterest,
    LinkedIn,
    Youtube,
    FacebookChat,
    Website,
    WebsiteUs,
    PrivacyPolicyV2,
    TermsPolicy,
    ServiceCancellationPolicy,
    IntroduceContent1,
    IntroduceContent2,
    PaymentMethod,
    ImageAboutUsHome: ImageAboutUsHomeUrl,
    BgFooter: BgFooterUrl,
    Bg: BgUrl,
  };
  return data;
};
