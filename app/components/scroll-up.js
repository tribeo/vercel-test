export default function ScrollUp() {
  const handleScrollUpClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-up-box" onClick={handleScrollUpClick}>
      <div className="inner">
        <div className="btn-pagetop flex justify-end">
          <button aria-label="ページトップへ">
            <i className="icon icon-pagetop scroll-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
