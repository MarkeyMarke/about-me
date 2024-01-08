// Taken from https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
function getStringHashCode(str) {
    return str.split('').reduce(
        (prevHash, currVal) =>
            // eslint-disable-next-line no-bitwise
            ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
        0,
    );
}

export default getStringHashCode;
