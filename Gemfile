source 'https://rubygems.org'
ruby "~> 2.3.0"
git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Upload de imagens para cloudinary usando paperclip
# gem 'paperclip-cloudinary'

# Gerar PDFs
gem 'wicked_pdf'
gem 'wkhtmltopdf-binary'

# Validar cpf
gem 'validates_cpf_cnpj'

# ActiveAdmin, area administrativa
gem 'activeadmin', github: 'activeadmin'

# Font Awesome
gem 'font-awesome-rails'

# Cocoon para formulários has_many
gem "cocoon"

# Gem para seleção de paises
gem 'country_state_select', :git => 'https://github.com/arvindvyas/Country-State-Select.git'

# Mascaras de campos html
gem 'rails-assets-vanilla-masker', source: 'https://rails-assets.org'

# Alertas personalizados
gem 'rails-assets-sweetalert2', '~> 5.1.1', source: 'https://rails-assets.org'
gem 'sweet-alert2-rails'

# Ransack para filtros, busca no banco
gem 'ransack'

# Will_paginate para paginação
gem 'will_paginate', '~> 3.1.0'

# Paperclip para upload de imagens
gem "paperclip", "~> 5.0.0"

# Twiter bootstrap
gem "less-rails" 
gem "twitter-bootstrap-rails"

# Devise sessão de usuário
gem 'devise'

# Simple form
gem 'simple_form'


gem 'jquery-turbolinks'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.1'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.3.18', '< 0.5'
# Use Puma as the app server
gem 'puma', '~> 3.0'


# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby


# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :assets do
  gem 'turbo-sprockets-rails3'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
  gem 'pry-rails'
end

group :development do
    
  # Gem para gerar diagrama er
  gem "rails-erd" 
  
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :production do
  gem 'pg'
  gem 'rails_12factor'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]



