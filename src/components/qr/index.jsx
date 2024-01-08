import QRCode from "react-qr-code";
import PropTypes from "prop-types";

export default function QR({ text, size }) {
  return (
    <div
      style={{
        height: "auto",
        margin: "0 auto",
        maxWidth: size,
        width: "100%",
      }}
    >
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={text}
        viewBox="0 0 256 256"
      />
    </div>
  );
}

QR.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
