// JavaScript function to show orders based on selected user
function showUserOrders(userId) {
    const userOrders = {
        1: [
            { orderId: 101, productName: "Oversize Shirt", quantity: 1 },
            { orderId: 102, productName: "Cargo Pants", quantity: 2 }
        ],
        2: [
            { orderId: 103, productName: "Jordan Short", quantity: 1 }
        ],
        3: [
            { orderId: 104, productName: "Slamdunk Shirt", quantity: 1 },
            { orderId: 105, productName: "Slamdunk short", quantity: 1 }
        ]
    };

    const userDetails = {
        1: { name: "Alejandro Mabaho", email: "Alejandro@example.com", role: "User" },
        2: { name: "Reizel Bragado", email: "Reizelbragado@example.com", role: "User" },
        3: { name: "Earl Yumol", email: "Earl123@example.com", role: "User" }
    };

    const user = userDetails[userId];
    const orders = userOrders[userId];

    let ordersHtml = '';
    if (orders) {
        orders.forEach(order => {
            ordersHtml += `
                <div class="order">
                    <p>Order ID: ${order.orderId}</p>
                    <p>Product: ${order.productName}</p>
                    <p>Quantity: ${order.quantity}</p>
                </div>
            `;
        });
    } else {
        ordersHtml = '<p>No orders found for this user.</p>';
    }

    const userModal = document.getElementById("userModal");
    userModal.innerHTML = `
        <div class="modal-content">
            <span onclick="closeModal()" class="close-btn">&times;</span>
            <h3>User: ${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Role: ${user.role}</p>
            <h4>Orders:</h4>
            ${ordersHtml}
        </div>
    `;
    userModal.style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById("userModal").style.display = 'none';
}