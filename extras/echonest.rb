class Echonest
  include HTTParty
  base_uri "developer.echonest.com/api/v4"
  
  def initialize
    @key = 'NONB3DDN9QV5Z1MWQ'
  end
  
  def find_song()
    self.class.get("/song/search?api_key=#{@key}&format=json&artist=muse");
  end
  
  def find_code(artist, title)
    self.class.get("/song/search?api_key=#{@key}&format=json&results=1&artist=#{artist}&title=#{title}&bucket=id:rdio-US&bucket=audio_summary&bucket=tracks")
  end
  
end