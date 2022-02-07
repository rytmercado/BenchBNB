# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Bench.destroy_all

demouser = User.create(username: 'demo@benchbnb.com', password: 'password')
demobench1 = Bench.create(description: 'Bench 1', num_seats: 4, lat: 37.733082, lng: -122.438545)
demobench2 = Bench.create(description: 'Bench 2', num_seats: 2, lat: 37.686798, lng: -122.374512)
demobench3 = Bench.create(description: 'Bench 3', num_seats: 6, lat: 37.792484, lng: -122.411256)
demobench4 = Bench.create(description: 'Bench 4', num_seats: 3, lat: 37.800339, lng: -122.489433)
demobench5 = Bench.create(description: 'Bench 5', num_seats: 3, lat: 37.830811, lng: -122.482742)
