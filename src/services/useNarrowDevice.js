import { useLayoutEffect, useState } from 'react';

const DESKTOP_NAV_WIDTH_PX = 300;
const DESKTOP_PAGE_SECTION_MIN_WDITH_PX = 800;
const DESKTOP_MAIN_PAGE_SIDE_PADDING_PX = 40;
const DESKTOP_MIN_VIEWPORT_WIDTH =
    DESKTOP_NAV_WIDTH_PX +
    DESKTOP_MAIN_PAGE_SIDE_PADDING_PX * 2 +
    DESKTOP_PAGE_SECTION_MIN_WDITH_PX;

function useNarrowDevice() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            const vw = Math.max(
                document.documentElement.clientWidth || 0,
                window.innerWidth || 0,
            );
            setSize(vw);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size < DESKTOP_MIN_VIEWPORT_WIDTH;
}

export default useNarrowDevice;
