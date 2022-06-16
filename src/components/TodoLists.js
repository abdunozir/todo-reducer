import useTodo from "../Store/ShopContext";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TodoLists.css";

function TodoLists() {
  let { total, products, done, DeleteFromList, doneit } = useTodo();
  return (
    <div className="Lists-container">
      <div className="lists-count">
        <h1>
          {total > 1 ? "Total lists" : "Total list"}: {total}{" "}
        </h1>
        <h1>
          {done > 1 ? "Done lists" : "Done list"}: {done}{" "}
        </h1>
      </div>
      <div title="Click if you have already done it" className="list-wrapper">
        {products.map((el, i) => {
          return (
            <div
              onClick={() => doneit(el.id)}
              style={{ backgroundColor: el.isDone ? "#0AC095" : "#babababc" }}
              key={i}
              className="Each-list"
            >
              <h2>{el.todo}</h2>
              <div className="del" onClick={() => DeleteFromList(el.id)}>
                <DeleteIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoLists;
