const vendorLogos: Record<string, string> = {
  hepsiburada: "/images/store_logo/hepsi.png",
  trendyol: "/images/store_logo/trendyol.png",
  n11: "/images/store_logo/n11.png"
};

export const getVendorLogo = (vendor: string): string => {
  return vendorLogos[vendor.toLowerCase()] || "/images/store_logo/default.png";
};
