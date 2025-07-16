* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Rubik", sans-serif;
  height: auto;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0px;
  background: var(--Canvas-canvas-primary, #dadada);
}

.wak-featured-resource-two-content-mob-image, .wak-featured-resource-two-content-top, .wak-featured-resource-two-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* Common reusable flex column center */
.wak-featured-resource-one-content-item, .wak-featured-resource-one-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

/* Common reusable flex center */
.wak-featured-resource-two-content-top-tag {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wak-featured-resource-one {
  display: flex;
  min-width: 393px;
  padding: var(--Padding-top-bottom-xxl, 96px) var(--Padding-sides-lg, 24px) var(--Padding-top-bottom-xxl, 96px) var(--Padding-sides-xl-default, 24px);
  align-items: center;
  gap: var(--Spacing-spacing-blocks, 120px);
  background: var(--Canvas-canvas-contrast, #fff);
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-one {
    width: 1440px;
    padding: var(--Padding-top-bottom-xxl, 120px) var(--Padding-sides-lg, 40px) var(--Padding-top-bottom-xxl, 120px) var(--Padding-sides-xl-default, 80px);
  }
}
.wak-featured-resource-one-content {
  gap: var(--Spacing-spacing-lg, 40px);
  flex: 1 0 0;
}
.wak-featured-resource-one-content-tag {
  padding: 8px 16px;
  border-radius: var(--Radius-radius-circle, 100px);
  background: var(--Gradient, linear-gradient(247deg, var(--Gradient-Start, #ffeb9a) 14.99%, var(--Gradient-End, #dff2f1) 99.82%));
  color: #262626;
}
.wak-featured-resource-one-content-item {
  gap: var(--Spacing-spacing-md, 24px);
}
.wak-featured-resource-one-content-item-title {
  color: var(--Text-text-primary, #262626);
  font-size: var(--Sizes-h3, 38px);
  font-weight: 500;
  line-height: 105%;
}
.wak-featured-resource-one-content-item-mob-image {
  display: flex;
  width: 100%;
  height: 264px;
  justify-content: space-between;
  border-radius: var(--Radius-radius-default, 20px);
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-one-content-item-mob-image {
    display: none;
  }
}
.wak-featured-resource-one-content-item-description {
  color: var(--Text-text-primary, #262626);
  font-size: var(--Sizes-Large, 24px);
  font-weight: 300;
  line-height: 140%;
}
.wak-featured-resource-one-content-item-button {
  padding: var(--padding-top-bottom, 12px) var(--padding-sides, 20px);
  text-decoration: none;
  color: #262626;
  border-radius: var(--radius, 10px);
  background: var(--Buttons-btn-bg-primary, #ffce03);
}
.wak-featured-resource-one-image {
  width: 100%;
  height: 450px;
  display: none;
  border-radius: var(--Radius-radius-default, 20px);
  flex: 1 0 0;
  justify-content: space-between;
  align-items: flex-start;
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-one-image {
    display: flex;
  }
}

.wak-featured-resource-two {
  margin-top: 100px;
  display: flex;
  width: 100%;
  padding: var(--Padding-top-bottom-xxl, 96px) var(--Padding-sides-lg, 24px) var(--Padding-top-bottom-xxl, 96px) var(--Padding-sides-xl-default, 24px);
  align-items: flex-start;
  gap: var(--Spacing-spacing-xxl, 80px);
  border-radius: var(--Radius-radius-default, 20px);
  background: var(--Canvas-canvas-contrast, #fff);
  position: relative;
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-two {
    width: 1360px;
    height: 720px;
    padding: var(--Padding-top-bottom-xl, 80px) var(--Padding-sides-lg, 40px) var(--Padding-top-bottom-xl, 80px) var(--Padding-sides-xl-default, 80px);
  }
}
.wak-featured-resource-two-image {
  width: 560px;
  height: 100%;
  transform: rotate(90deg);
  flex-shrink: 0;
  border-radius: var(--Radius-radius-default, 20px);
  display: none;
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-two-image {
    display: block;
  }
}
.wak-featured-resource-two-content {
  justify-content: space-between;
  flex: 1 0 0;
  align-self: stretch;
  gap: 24px;
}
.wak-featured-resource-two-content-top {
  gap: 40px;
  align-self: stretch;
}
.wak-featured-resource-two-content-top-tag {
  padding: 8px 16px;
  gap: 10px;
  border-radius: var(--Radius-radius-circle, 100px);
  background: var(--Gradient, linear-gradient(247deg, var(--Gradient-Start, #ffeb9a) 14.99%, var(--Gradient-End, #dff2f1) 99.82%));
}
.wak-featured-resource-two-content-top-title {
  color: var(--Text-text-primary, #262626);
  font-size: var(--Sizes-h3, 38px);
  font-weight: 500;
  line-height: 105%;
}
.wak-featured-resource-two-content-mob-image {
  width: 100%;
  height: 264px;
  justify-content: space-between;
  border-radius: var(--Radius-radius-default, 20px);
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-two-content-mob-image {
    display: none;
  }
}
.wak-featured-resource-two-content-bottom {
  width: 100%;
  color: var(--Text-text-primary, #262626);
  font-size: var(--Sizes-Large, 24px);
  font-weight: 300;
  line-height: 140%;
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-two-content-bottom {
    width: 280px;
    max-height: 240px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
  }
}
.wak-featured-resource-two-content-mob-button {
  padding: var(--padding-top-bottom, 12px) var(--padding-sides, 20px);
  text-decoration: none;
  color: #262626;
  border-radius: var(--radius, 10px);
  background: var(--Buttons-btn-bg-primary, #ffce03);
  display: block;
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-two-content-mob-button {
    display: none;
  }
}
.wak-featured-resource-two-cta {
  width: 320px;
  height: 320px;
  padding: var(--Padding-top-bottom-md, 32px) 0 0 var(--Padding-sides-lg, 40px);
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  right: 0;
  bottom: 0;
  background: var(--Canvas-canvas-primary, #dadada);
  border-radius: 20px;
  text-decoration: none;
  display: none;
}
@media screen and (min-width: 1024px) {
  .wak-featured-resource-two-cta {
    display: flex;
  }
}
.wak-featured-resource-two-cta::after, .wak-featured-resource-two-cta::before {
  content: "";
  width: 40px;
  height: 40px;
  background: transparent;
  position: absolute;
  border-bottom-right-radius: 20px;
  box-shadow: 13px 13px 0 0 var(--Canvas-canvas-primary, #dadada);
}
.wak-featured-resource-two-cta::after {
  top: -40px;
  right: 0;
}
.wak-featured-resource-two-cta::before {
  bottom: 0;
  left: -40px;
}
.wak-featured-resource-two-cta-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  aspect-ratio: 1/1;
  border-radius: var(--Radius-radius-circle, 100px);
  background: var(--Icons-icon-bg-alt, #262626);
}
.wak-featured-resource-two-cta-text {
  color: var(--Text-text-primary, #262626);
  font-size: var(--Sizes-h2, 48px);
  font-weight: 500;
  line-height: 105%;
}

/*# sourceMappingURL=style.c.map */
