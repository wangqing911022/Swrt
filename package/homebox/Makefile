include $(TOPDIR)/rules.mk

PKG_NAME:=homebox
PKG_VERSION:=0.2.0
PKG_RELEASE:=1

PKG_SOURCE:=homebox-linux-arm64-musl.tar.gz
PKG_SOURCE_URL:=https://github.com/XGHeaven/homebox/releases/download/v$(PKG_VERSION)
PKG_HASH:=a8682498ae848489dcc4a5483f4e3a657cf4cf0a25af49a38f6751283b1046e8

PKG_LICENSE:=MIT
PKG_MAINTAINER:=Swrt

include $(INCLUDE_DIR)/package.mk

define Package/homebox
  SECTION:=net
  CATEGORY:=Network
  TITLE:=HomeBox network speed test and benchmark server
  URL:=https://github.com/XGHeaven/homebox
  PKGARCH:=aarch64_cortex-a53
endef

define Package/homebox/description
  HomeBox is a self-hosted network speed test and benchmark server with an
  embedded web interface. It also provides LLM latency and throughput tests.
endef

define Package/homebox/conffiles
/etc/config/homebox
endef

define Build/Compile
endef

define Package/homebox/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/homebox-linux-arm64-musl $(1)/usr/bin/homebox
	$(INSTALL_DIR) $(1)/etc/init.d
	$(INSTALL_BIN) ./files/homebox.init $(1)/etc/init.d/homebox
	$(INSTALL_DIR) $(1)/etc/config
	$(INSTALL_CONF) ./files/homebox.config $(1)/etc/config/homebox
endef

$(eval $(call BuildPackage,homebox))
