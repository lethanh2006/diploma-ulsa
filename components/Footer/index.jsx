import React from "react";
import { useTranslation } from "components/Utils/useTranslation";

import LogoImage from "../../public/assets/image/logo-full-white.png";
import BgImage from "../../public/assets/image/hosting/bg-footer.png";

const FacebookIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 320 512">
    <path
      fill="currentColor"
      d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H297V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
    />
  </svg>
);

const YoutubeIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 576 512">
    <path
      fill="currentColor"
      d="M549.66 124.08c-6.28-23.65-24.82-42.19-48.47-48.47C458.78 64 288 64 288 64S117.22 64 74.81 75.61c-23.65 6.28-42.19 24.82-48.47 48.47C16 167.13 16 256 16 256s0 88.87 10.34 131.92c6.28 23.65 24.82 41.37 48.47 47.65C117.22 448 288 448 288 448s170.78 0 213.19-12.43c23.65-6.28 42.19-24 48.47-47.65C560 344.87 560 256 560 256s0-88.87-10.34-131.92zM232 336.5v-161l142.74 80.5L232 336.5z"
    />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();

  const footerItems = [
    {
      label: t("footer.phone_label"),
      value: "02435566176",
      href: "tel:+842435566176",
    },
    {
      label: t("footer.hq_label"),
      value: t("footer.hq_addr"),
      href: "https://maps.app.goo.gl/wcfgmDV5jKhQXrty7",
    },
    {
      label: t("footer.hcm_hq_label"),
      value: t("footer.hcm_hq_addr"),
      href: "https://maps.app.goo.gl/rQi1r2YYoAJaTapp6",
    },
    {
      label: t("footer.email_label"),
      value: "dlx@ulsa.edu.vn",
      href: "mailto:dlx@ulsa.edu.vn",
    },
    {
      label: t("footer.hn_campus_label"),
      value: t("footer.hn_campus_addr"),
      href: "https://maps.app.goo.gl/CHGeKDxUsbbUtoCbA",
    },
    {
      label: t("footer.hcm_campus_label"),
      value: t("footer.hcm_campus_addr"),
      href: "https://maps.app.goo.gl/NLuJzLSa7aFsVFa26",
    },
  ];

  return (
    <footer id="ulsa-footer" className="ulsa-footer">
      <div
        className="ulsa-footer-main"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 79, 159, 0.95), rgba(31, 79, 159, 0.95)), url(${BgImage})`,
        }}
      >
        <div className="ulsa-footer-header-shell">
          <div className="ulsa-footer-header">
            <img
              className="ulsa-footer-logo"
              src={LogoImage}
              alt="Trường Đại học Lao động - Xã hội"
            />

            <div className="ulsa-footer-socials">
              <a
                className="ulsa-footer-social"
                href="https://www.facebook.com/ULSAHaNoi"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                className="ulsa-footer-social"
                href="https://www.youtube.com/@ULSATV"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="ulsa-footer-grid-shell">
          <div className="ulsa-footer-grid">
            {footerItems.map((item) => (
              <div className="ulsa-footer-item" key={item.label}>
                <div className="ulsa-footer-label">{item.label}</div>
                <a
                  className="ulsa-footer-value"
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ulsa-footer-copyright">
        <div className="ulsa-footer-copyright-inner">
          © Copyright 2025 {t("footer.copyright")}
        </div>
      </div>

      <style jsx global>{`
        .ulsa-footer {
          color: #fff;
        }

        .ulsa-footer-main {
          box-sizing: border-box;
          padding: 10px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .ulsa-footer-header-shell {
          box-sizing: border-box;
          margin-bottom: 20px;
          padding: 0 10px;
        }

        .ulsa-footer-header {
          box-sizing: border-box;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          max-width: 1190px;
          min-height: 107px;
          margin: 0 auto;
          padding: 10px 0;
        }

        .ulsa-footer-logo {
          display: block;
          width: auto;
          max-width: 100%;
          height: 87px;
          object-fit: contain;
          object-position: left center;
        }

        .ulsa-footer-socials {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .ulsa-footer-social {
          box-sizing: border-box;
          display: inline-flex;
          flex: 0 0 54px;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          color: #fff;
          background: #082060;
          border-radius: 50%;
          transition: background-color 0.2s ease;
        }

        .ulsa-footer-social:hover,
        .ulsa-footer-social:focus {
          color: #fff;
          background: #d82221;
        }

        .ulsa-footer-social svg {
          display: block;
          width: 18px;
          height: 18px;
        }

        .ulsa-footer-grid-shell {
          border-top: 1px solid #1f4f9f;
        }

        .ulsa-footer-grid {
          box-sizing: border-box;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 32px;
          width: 100%;
          max-width: 1170px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .ulsa-footer-item {
          box-sizing: border-box;
          min-width: 0;
          min-height: 65.8px;
          padding-bottom: 20px;
        }

        .ulsa-footer-label {
          margin-bottom: 10px;
          color: #9bd3ff;
          font-family: "Manrope", sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 15px;
          letter-spacing: 0.03em;
        }

        .ulsa-footer-value {
          display: block;
          color: #fff;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.3;
          letter-spacing: 0.03em;
          text-decoration: none;
        }

        .ulsa-footer-value:hover,
        .ulsa-footer-value:focus {
          color: #fff;
          text-decoration: none;
        }

        .ulsa-footer-copyright {
          box-sizing: border-box;
          padding: 10px 0;
          color: rgba(255, 255, 255, 0.5);
          background: #063077;
          font-family: "Manrope", sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 26.6px;
          letter-spacing: 0.06em;
          text-align: center;
        }

        .ulsa-footer-copyright-inner {
          box-sizing: border-box;
          max-width: 1170px;
          margin: 0 auto;
          padding: 10px 0;
        }

        @media (max-width: 1024px) {
          .ulsa-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .ulsa-footer-header {
            flex-direction: column;
            align-items: flex-start;
            min-height: 164px;
          }

          .ulsa-footer-logo {
            width: 100%;
            height: 70px;
          }

          .ulsa-footer-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .ulsa-footer-copyright {
            line-height: 21px;
          }

          .ulsa-footer-copyright-inner {
            padding-right: 10px;
            padding-left: 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
