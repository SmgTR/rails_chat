pin "application", preload: true
pin "@hotwired/turbo-rails", to: "turbo.min.js", preload: true
pin "@hotwired/stimulus", to: "stimulus.min.js", preload: true
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js", preload: true 
pin "semantic-ui-sass", to: "https://ga.jspm.io/npm:semantic-ui-sass@2.4.2/semantic-ui.js", preload: true
pin "jquery", to: "https://code.jquery.com/jquery-3.6.0.min.js", preload: true

pin_all_from "app/javascript/controllers", under: "controllers"
pin "@rails/actioncable", to: "actioncable.esm.js"
pin_all_from "app/javascript/channels", under: "channels"
