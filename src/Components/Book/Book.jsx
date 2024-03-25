
const Book = ({book}) => {
    const { image, tags, author, bookName, category, rating } = book;
    return (
      <div className="card card-compact  bg-base-100 p-4 border">
        <figure className="bg-[#F3F3F3] rounded-xl py-4">
          <img src={image} alt="Books" />
        </figure>
        <div className="flex items-center gap-4 p-4 ">
          {tags.map((tag, idx) => (
            <p key={idx}>{tag}</p>
          ))}
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <hr />
        </div>
        <div className="flex justify-between p-4">
          <p>{category}</p>
          <p>{rating}</p>
        </div>
      </div>
    );
};

export default Book;