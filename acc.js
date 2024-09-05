document.addEventListener('DOMContentLoaded', () => {
    const accountForm = document.getElementById('account-form');
    const ordersList = document.getElementById('orders-list');

    accountForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Information updated!');
    });

    const orders = [
        { id: 1, item: 'Laptop', date: '2024-05-20', status: 'Delivered' },
        { id: 2, item: 'Smartphone', date: '2024-05-21', status: 'Processing' },
        { id: 3, item: 'Headphones', date: '2024-05-22', status: 'Shipped' },
    ];

    orders.forEach(order => {
        const listItem = document.createElement('li');
        listItem.textContent = `${order.item} - ${order.date} - ${order.status}`;
        ordersList.appendChild(listItem);
    });
});
