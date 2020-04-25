let guestSubscriptionButton = document.getElementById("guest-subscription");
let subscriptionForm = document.getElementById("subscription-form");
let submitMessageContainer = document.getElementById("submit-message");
let subscriptionList = document.getElementById("subscriptions-list");

function addSubscription(subscription){
    let subscriptions = getSubcriptions();
    subscriptions.push(subscription);
    localStorage.setItem('subscriptions', JSON.stringify(subscriptions));
}

function getSubcriptions() {
    return JSON.parse(localStorage.getItem('subscriptions')) || [];
}

function displaySubscriptions(container, subscriptions){
    container.innerHTML = '';
    
    
    subscriptions.forEach(function (subscription){
        let subscriptionElement = document.createElement ( 'li');
        subscriptionElement.innerText = "Пользователь " + subscription.name + " оставил комментарий: " + subscription.comment;
        container.appendChild(subscriptionElement);
    });
 }

subscriptionForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let formData = new FormData(subscriptionForm);
    let subscription = {
        'name': formData.get('username'),
        'phone': formData.get('phone-number'),
        'comment': formData.get('comment')
    }; 
        
    
    
    
    
    addSubscription(subscription);
    
    submitMessageContainer.innerText = "Спасибо за отзыв, " + subscription.name + ".Мы очень ценим ваше мнение!";
    
    
    
//    displaySubscriptions(subscriptionList, getSubcriptions());
    
    setTimeout( function() {
        submitMessageContainer.innerText = "";
    }, 1000);
    
});
 displaySubscriptions(subscriptionList, getSubcriptions());