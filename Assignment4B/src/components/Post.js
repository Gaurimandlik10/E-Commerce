const Post = ({ post }) => {
    return (
        <div className="row">
            <div className="col-md-4 mt-5" style={{ width: "18 rem" }}>
                <div className="card" style={{ width: "150px", height: "150px", objectFit: "contain" }}>
                    <img src={post.image} className="card-img-top" alt="" />
                </div>
                <div className="card-body mt-5 pt-5">
                    <h5 className="card-title mt-3">{post.title}</h5>
                    <p className="card-text mt-3">{post.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
export default Post