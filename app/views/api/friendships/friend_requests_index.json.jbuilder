json.array!(@friendRequests) do |friendRequest|

  json.id friendRequest.id
  json.friender_user friendRequest.friender_user

end
