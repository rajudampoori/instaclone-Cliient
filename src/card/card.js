import './card.css'
const Card = ({ post }) => {
    return (
        <section className="card">

            <section className='card-header'>
                <div className='card-header_name'>{post.name}</div>
                <div className='card-header_location'>{post.location}</div>
                <span>
                    <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </span>
            </section>

            <section className="card-image">
                <img src={post.PostImage} alt='imageicon' />
            </section>

            <section className='card-actions'>
                <span>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                </span>
                <span>
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                </span>
                <span>
                    {post.date}
                </span>
            </section>

            <section className='likes'>
                {post.likes} Likes
            </section>

            <section className='description'>
                {post.description}
            </section>

        </section>
    )
}
export default Card;