export function render() {
    return `
        <div class="page marketplace-page">

            <h1 class="page-title">Marketplace</h1>

            <div class="tabs">
                <span class="tab active">All Items</span>
                <span class="tab">Interested</span>
            </div>

            <!-- Item Card -->
            <div class="item-card">
                <div class="item-header">
                    <div class="avatar">M</div>
                    <div class="details">
                        <span class="name">Mike Rodriguez</span>
                        <span class="date"> · Oct 27</span>
                    </div>
                </div>

                <div class="item-info">
                    <h3 class="item-title">Scientific Calculator TI-84 Plus</h3>
                    <div class="price-line">
                        <span class="price">$60</span>
                        <span class="tag condition">Like New</span>
                        <span class="tag category">Electronics</span>
                    </div>

                    <p class="desc">
                        Barely used TI-84 Plus calculator. Purchased for one math class, now switching majors.
                        Includes USB cable and manual.
                    </p>
                </div>

                <img class="item-image"
                    src="https://source.unsplash.com/random/800x500?city"
                    alt="listing image"
                />

                <div class="item-footer">
                    <span class="likes">❤️ 202</span>
                    <span class="email">m.rodriguez@university.edu</span>
                    <button class="contact-btn">Contact Seller</button>
                </div>
            </div>

            <!--  Second Item Card -->
            <div class="item-card">
                <div class="item-header">
                    <div class="avatar">S</div>
                    <div class="details">
                        <span class="name">Sarah Chen</span>
                        <span class="date"> · Oct 24</span>
                    </div>
                </div>

                <div class="item-info">
                    <h3 class="item-title">Calculus Textbook - 8th Edition</h3>
                    <div class="price-line">
                        <span class="price">$45</span>
                        <span class="tag condition good">Good</span>
                        <span class="tag category">Textbooks</span>
                    </div>

                    <p class="desc">
                        Stewart Calculus 8th Edition. Used for one semester, minimal highlighting.
                        Great condition with all pages intact.
                    </p>
                </div>

                <img class="item-image"
                    src="https://source.unsplash.com/random/800x500?books"
                    alt="listing image"
                />

                <div class="item-footer">
                    <span class="likes">❤️ 178</span>
                    <span class="email">s.chen@university.edu</span>
                    <button class="contact-btn">Contact Seller</button>
                </div>
            </div>

        </div>
    `;
}
