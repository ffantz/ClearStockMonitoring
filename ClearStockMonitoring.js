document.addEventListener('DOMContentLoaded', function() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.')
        return;
    }

    if (Notification.permission !== 'granted')
        Notification.requestPermission();
});


function notifyMe(stock, value) {
    if (Notification.permission !== 'granted')
        Notification.requestPermission();
    else {
        var notification = new Notification('Notification title', {
            title: 'Alerta de mudança de preço',
            body: 'A ação ' + stock + ' mudou seu preço para R$ ' + value,
        })
        notification.onclick = function() {
            console.log("ok")
        }
    }
}

$("[data-symbol='CASH3F'] span.value").bind('DOMSubtreeModified', function(){
    if (parseFloat($("[data-symbol='CASH3F'] span.value").html()).toFixed(2) > 36) {
        notifyMe("CASH3F", $("[data-symbol='CASH3F'] span.value").html())
    }
})

$("[data-symbol='AMAR3F'] span.value").bind('DOMSubtreeModified', function(){
    if (parseFloat($("[data-symbol='AMAR3F'] span.value").html()).toFixed(2) < 5,70) {
        notifyMe("AMAR3F", $("[data-symbol='AMAR3F'] span.value").html())
    }
})

$("[data-symbol='JHSF3F'] span.value").bind('DOMSubtreeModified', function(){
    if (parseFloat($("[data-symbol='JHSF3F'] span.value").html()).toFixed(2) < 6,90) {
        notifyMe("JHSF3F", $("[data-symbol='JHSF3F'] span.value").html())
    }
})