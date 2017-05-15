class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
# {
#   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
#   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
# }
#... query logic goes here
    lat_bounds = [bounds["northEast"]["lat"].to_f, bounds["southWest"]["lat"].to_f]
    lng_bounds = [bounds["northEast"]["lng"].to_f, bounds["southWest"]["lng"].to_f]

    Bench.where("lat BETWEEN ? AND ?", lat_bounds.min, lat_bounds.max)
      .where("lng BETWEEN ? AND ?", lng_bounds.min, lng_bounds.max)
  end
end
