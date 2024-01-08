import { useLayoutEffect, useState } from 'react';

function useIsDeviceNarrower(widthInPX) {
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
    return size < widthInPX;
}

export default useIsDeviceNarrower;
