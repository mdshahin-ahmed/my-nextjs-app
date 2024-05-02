import Counter from "@/components/counter/Counter";
import Link from "next/link";

export const metadata = {
  title: "Home page",
  description: "This is home page",
};

const HomePage = async () => {
  // console.log("Hello world");
  const response = await fetch("http://localhost:5000/shoes", {
    next: {
      revalidate: 30,
    },
  });
  const shoes = await response.json();
  // console.log(data);
  return (
    // <div>
    //   <h1 className="text-4xl text-center">Welcome to next js. Home page</h1>
    //   <h1 className="text-5xl text-center mt-5">React server component</h1>
    //   <Counter />
    // </div>
    <div className="text-center my-5">
      <h1 className="text-4xl text-center">Welcome to next js. Home page</h1>
      <div className="flex justify-between p-5">
        {shoes.slice(0, 3)?.map((shoe) => (
          <div key={shoe.id} className="card w-80 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {shoe.title}
                <div className="badge badge-secondary">{shoe.price}</div>
              </h2>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">Buy Now</button>
                <button className="btn btn-outline btn-primary">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href={"all-shoes"}>
        <button className="btn btn-outline btn-primary">See more</button>
      </Link>
    </div>
  );
};

export default HomePage;
