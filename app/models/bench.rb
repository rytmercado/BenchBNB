class Bench < ApplicationRecord
    validates :description, :num_seats, :lat, :lng, presence: true

    # def self.in_bounds(bounds)
    #     p north = bounds['northEast']['lat'].to_f
    #     p south = bounds['southWest']['lat'].to_f
    #     p east = bounds['northEast']['lng'].to_f
    #     p west = bounds['southWest']['lng'].to_f
    #     Bench.all.to_a.select do |bench|
    #         bench.lat.between?(south, north) && bench.lng.between?(west, east)
    #     end
    # end

    def self.in_bounds(bounds)
        n_lat = bounds[:northEast][:lat]
        n_lng = bounds[:northEast][:lng]
        s_lat = bounds[:southWest][:lat]
        s_lng = bounds[:southWest][:lng]
    
        self.where("lat < ?", n_lat)
            .where("lat > ?", s_lat)
            .where("lng < ?", n_lng)
            .where("lng > ?", s_lng)
    end

end
