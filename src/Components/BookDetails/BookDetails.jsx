import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const BookDetails = () => {
   const jobs = useLoaderData();
   const {book_id}=useParams();
   const idInt = parseInt(book_id);
   const job = jobs.find(job=> job.book_id === idInt);
   console.log(job);
    return (
        <div>
           <NavBar></NavBar>
           <div>
           <div className="grid border md:grid-cols-4 gap-0 ml-10 mt-40">
                  <div className="border bg-slate-100 justify-center md:grid-span-4">
                  <img className=" bg-cover rounded-md" src={job.image_id} alt="" />
                  </div>
                  <div className=" ml-10 w-full border">
                    <h1 className=" text-4xl font-bold">{job.book_name}</h1>
                    <p className=" font-medium mt-5 ml-2 text-gray-500">By: {job.author_name}</p>
                    <hr/>
                    <br/>
                    <p className="ml-2 font-semibold ">{job.category}</p>
                    <hr/>
                    <p >{job.review}</p>
                    <p>Tag <div className="badge badge-accent badge-outline">#{job.tags}</div></p>
                    <hr/>
                    <div className="py-10 pt-10 font-semibold justify-between">
                    <p>Number:  {job.total_pages} </p>
                    <p>Publisher:  {job.publisher}</p>
                    <p>Year of Publishing:  {job.year_of_publishing}</p>
                    <p>Rating:  {job.rating}</p>
                    <br/>
                    <button className="btn btn-primary">Listen</button>
                    <button className="btn btn-primary">Listen</button>
                    </div>
                  </div>

               </div>
           </div>
        </div>
    );
};

export default BookDetails;