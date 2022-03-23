import "./Button.css";
const Button = ({
    content,
    onClick,
    classN = "",
    color = "",
    fontColor = "white",
    size,
    children,
}) => {
    let paddingSide;
    let margin;
    let fontSize;
    let fontWeight;
    let borderRadius;
    let zIndex;
    let padding;
    switch (size) {
        case "document":
            padding = "0%";
            fontSize = "26px";
            borderRadius = "5px";
            margin = "3.5px";

            break;
        case "big":
            padding = ("2rem", "2.5rem");
            paddingSide = "3rem";
            margin = "3.5px";
            fontSize = "26px";
            fontWeight = 300;
            borderRadius = "5px";
            break;
        case "small":
            padding = ("0.5rem", "0.5rem");
            margin = "3.5px";
            fontSize = "18px";
            fontWeight = 500;
            borderRadius = "5px";
            break;
        case "wide":
            padding = "1rem";
            paddingSide = "3.6rem";
            margin = "3.5px";
            fontSize = "26px";
            fontWeight = 300;
            borderRadius = "5px";
            zIndex = 1000;
            break;
        default:
            padding = ("1rem", "1.5rem");
            margin = "3.5px";
            fontSize = "22px";
            fontWeight = 300;
            borderRadius = "5px";
            zIndex = 1000;
    }
    const style = size
        ? {
              color: fontColor,
              backgroundColor: color,
              padding: padding ? padding : "",
              paddingRight: paddingSide ? paddingSide : "",
              paddingLeft: paddingSide ? paddingSide : "",
              margin: margin,
              fontSize: fontSize,
              fontWeight: fontWeight,
              borderRadius: borderRadius,
              zIndex: zIndex,
          }
        : null;
    return (
        <button
            onClick={onClick}
            className={`btn ${classN}`}
            style={size ? style : null}
        >
            {content}
            {children}
        </button>
    );
};

export default Button;
