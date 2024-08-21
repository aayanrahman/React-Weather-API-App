import {useRef} from "react";

function HorizontallyScrollable({children, className=""}) {
    const scrollRef = useRef()
    const handleMouseDown = (evt) => {
        const orginalX = evt.pageX;
        const scrollLeft = scrollRef.current.scrollLeft;

        const HandleMouseMove = (evt) => {
            const updatedX = evt.pageX;
            const offset = updatedX - orginalX;

            scrollRef.current.scrollLeft = scrollLeft - offset;
        };

        const HandleMouseUp = (evt) => {
            window.removeEventListener("mousemove", HandleMouseMove)
            window.removeEventListener("mouseup", HandleMouseUp);
        }

        window.addEventListener("mousemove", HandleMouseMove);
        window.addEventListener("mouseup", HandleMouseUp);
    }
     
    return (
        <div className={className} ref={scrollRef} onMouseDown={handleMouseDown}>{children}</div>
    )
}

export default HorizontallyScrollable