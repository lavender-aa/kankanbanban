const SideBar = () => {
  const sample = ["board 1", "board 2", "board 3"];

  const sample_board_1 = () => {
    return (
      <div className="accordion accordion-flush">
        <div className="accordion-item">
          <h3>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <a href="#">{sample[0]}</a>
            </button>
          </h3>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">wowie zowie</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <p>Directory</p>
      <button type="button" className="btn">
        graph button
      </button>
      <a href="#">Home</a>
      <ul>
        {sample.map((item, index) => (
          <li className="list-group" key={item}>
            {sample_board_1()}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideBar;
