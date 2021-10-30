import React from 'react';
import './Workout.css'
const Workouts = () => {
    return (
        <div>
            <h3 className="fw-bold video-title">
                Workout Videos
               </h3>
            <section class="videos">
                
                <iframe width="510" height="315" src="https://www.youtube.com/embed/5mCcUndJMo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/__BcrGEl70Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/PQSeTX8iIHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/XTfrIhCkY3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/NEaXkXgLt8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <iframe width="510" height="315" src="https://www.youtube.com/embed/PDqyBM7Hqs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        </div>
    );
};

export default Workouts;