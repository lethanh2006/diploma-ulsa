import React, { Fragment } from "react";
import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "antd/dist/antd.css";
import Layout from "components/Layout/Layout";
import { DefaultSeo } from "next-seo";
import { LanguageProvider } from "components/Utils/useTranslation";

export default ({ Component, pageProps }) => (
  <LanguageProvider>
    <Layout>
      <Modal />
      <DefaultSeo
        title="HỆ THỐNG TRA CỨU VĂN BẰNG, CHỨNG CHỈ ULSA"
        description="Hệ thống tra cứu văn bằng, chứng chỉ của Trường Đại học Lao động - Xã hội"
        openGraph={{
          type: "website",
          locale: "vi_VN",
          url: "https://ulsa.edu.vn/",
          site_name: "TRƯỜNG ĐẠI HỌC LAO ĐỘNG - XÃ HỘI",
          images: [
            {
              url: "/assets/image/hosting/metadata.png",
              width: 800,
              height: 600,
              alt: "Banner",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </Layout>
  </LanguageProvider>
);
