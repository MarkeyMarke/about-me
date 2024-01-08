const NAV_WIDTH_PX = 300;
const PAGE_SECTION_MIN_WIDTH_PX = 800;
const MAIN_PAGE_HORIZONTAL_PADDING_PX = 40;

/*
    The minimum width needed for screens to support side nav
    Calculates: Side nav width + main page padding + page section width
*/
const DESKTOP_VIEWPORT_MIN_WIDTH_PX =
    NAV_WIDTH_PX +
    MAIN_PAGE_HORIZONTAL_PADDING_PX * 2 +
    PAGE_SECTION_MIN_WIDTH_PX;

export {
    DESKTOP_VIEWPORT_MIN_WIDTH_PX,
    NAV_WIDTH_PX,
    PAGE_SECTION_MIN_WIDTH_PX,
    MAIN_PAGE_HORIZONTAL_PADDING_PX,
};
