# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Bench.destroy_all

b1 = Bench.create(description: "Lafayette Park Bench",
                  lat: 37.7915357,
                  lng: -122.4307172
                 )
b2 = Bench.create(description: "Alta Plaza Bench",
                  lat: 37.7907092,
                  lng: -122.440314
                 )
b3 = Bench.create(description: "Nice bench",
                  lat: 37.8008612,
                  lng: -122.411985
                 )
