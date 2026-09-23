// import Sticky from 'react-stickynode';
// import { DrawerProvider } from 'common/src/contexts/DrawerContext';
// import Navbar from 'common/src/containers/Hosting/Navbar';
// import Footer from 'common/src/components/Footer/index';
import { Affix, Button, Icon } from "antd";
import { ResetCSS } from "assets/css/style";
import logo from "assets/image/hosting/ulsa-logo.png";
import Navbar from "components/Navbar";
// import Navbar from '../../../common/src/containers/Hosting/Navbar'
import Footer from "components/Footer/index";
import Head from "next/head";
// import Footer from 'common/src/containers/Hosting/Footer';
import { ParallaxProvider } from "react-scroll-parallax";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { hostingTheme } from "./hosting";
import { ContentWrapper, GlobalStyle } from "./hosting.style";

const name = "TomCatJS";
export const siteTitle = "Hệ thống tra cứu văn bằng, chứng chỉ ULSA";


export default function Layout({ children, home }) {
  const scrollToTop = () => {
    if (window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Head>
        <link rel="prefetch" href="/favicon.ico" />
        <link rel="prefetch" href="/assets/image/hosting/ulsa-logo.png" />
        <link rel="prerender" href="https://ulsa.edu.vn/" />
        <link rel="prerender" href="https://tuyensinh.ulsa.edu.vn/" />
        <link />
        <title>
          HỆ THỐNG TRA CỨU VĂN BẰNG, CHỨNG CHỈ - TRƯỜNG ĐẠI HỌC LAO ĐỘNG - XÃ HỘI
        </title>
        <meta
          name="Description"
          content="Hệ thống tra cứu văn bằng, chứng chỉ của Trường Đại học Lao động - Xã hội"
        />
        <meta name="theme-color" content="#063077" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
          // rel="Prefetch"
          rel="preload"
          as="font"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
        />
        <meta
          name="description"
          content="Hệ thống tra cứu văn bằng, chứng chỉ của Trường Đại học Lao động - Xã hội"
        />
        <meta property="og:image" content={logo} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* navbar */}

      <ThemeProvider theme={hostingTheme}>
        <ParallaxProvider>
          <ResetCSS />
          <GlobalStyle />

          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <Navbar />
            </Sticky>

            {children}
            <Footer />
            <Affix offsetBottom={20} innerZ={99999}>
              <Button
                type="primary"
                style={{
                  float: "right",
                  margin: 20,
                  backgroundColor: "#063077",
                  borderColor: "#063077",
                  borderRadius: "40%",
                }}
                onClick={scrollToTop}
              >
                <Icon type="arrow-up" />
              </Button>
            </Affix>
          </ContentWrapper>
        </ParallaxProvider>
      </ThemeProvider>
    </div>
  );
}
