const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Manuela',
          last: 'Garcia',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/39.jpg',
        },
        login: {
          username: 'TheRabbitOnTheMoon',
        },
      },
    ],
  },
}

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
}
