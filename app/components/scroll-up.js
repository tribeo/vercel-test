export default function ScrollUp() {
  const handleScrollUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-up-box" onClick={handleScrollUpClick}>
      <div className="scroll-up-container">
        <div className="btn-pagetop">
          <button aria-label="ページトップへ">
            <i className="icon icon-pagetop scroll-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
