import {
  createFontStyle,
  createFontSizeStyle,
  createFontWeightStyle,
  createLineHeight,
  createFontFamily,
  createLetterSpacing,
} from "./utils/typography"

const createFontFamilyPoppins = () => createFontFamily("Poppins", true)

const createFontFamilyDmSans = () => createFontFamily("DM Sans", true)

const typography = {
  org: {
    headline: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(40),
      createFontWeightStyle("500"),
      createLineHeight("52px")
    ),
    title: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(32),
      createFontWeightStyle("500"),
      createLineHeight("42px")
    ),
    subTitle: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(24),
      createFontWeightStyle("500"),
      createLineHeight("31px")
    ),
    bodyLargeHighlight: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(16),
      createFontWeightStyle("bold"),
      createLineHeight("21px")
    ),
    bodyLarge: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(16),
      createFontWeightStyle("400"),
      createLineHeight("21px")
    ),
    bodyHighlight: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(14),
      createFontWeightStyle("bold"),
      createLineHeight("18px")
    ),
    bodySmallHighlight: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(12),
      createFontWeightStyle("bold"),
      createLineHeight("16px")
    ),
    body: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(14),
      createFontWeightStyle("400"),
      createLineHeight("18px")
    ),
    bodySmall: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(12),
      createFontWeightStyle("400"),
      createLineHeight("16px")
    ),
    captionHighLight: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(10),
      createFontWeightStyle("bold"),
      createLineHeight("13px"),
      createLetterSpacing("0.03em")
    ),
    caption: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(10),
      createFontWeightStyle("400"),
      createLineHeight("13px"),
      createLetterSpacing("0.03em")
    ),
    text: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(20),
      createFontWeightStyle("normal"),
      createLineHeight("28px"),
      createLetterSpacing("0px")
    ),
    textHighlight: createFontStyle(
      createFontFamilyDmSans(),
      createFontSizeStyle(20),
      createFontWeightStyle("bold"),
      createLineHeight("28px"),
      createLetterSpacing("0px")
    ),
  },
  largeTitle: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(64),
    createFontWeightStyle("600"),
    createLineHeight("96px")
  ),
  caption: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(22),
    createFontWeightStyle("500"),
    createLineHeight("36px"),
  ),
  title: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(22),
    createFontWeightStyle("500"),
  ),
  captionHighLight: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(14),
    createFontWeightStyle("bold"),
    createLineHeight("19px"),
    createLetterSpacing("1px")
  ),
  titleHighLight: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(24),
    createFontWeightStyle("400")
  ),
  link: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(18),
    createFontWeightStyle("500"),
    createLineHeight("16px"),
    createLineHeight("24px")
  ),
  button: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(18),
    createFontWeightStyle("600"),
    createLineHeight("16px")
  ),
  subHeadline: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(36),
    createFontWeightStyle(700),
    createLineHeight("33px")
  ),
  formHeadline: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(16),
    createFontWeightStyle("normal"),
    createLineHeight("19px"),
    createLetterSpacing("1px")
  ),
  description: createFontStyle(
    createFontFamilyPoppins(),
    createFontSizeStyle(24),
    createFontWeightStyle("500"),
    createLineHeight("1.7")
  ),
}

export default typography
