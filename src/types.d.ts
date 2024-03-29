interface Profile {
  network: string
  url: string
  svg: string
}

interface Config {
  name: string
  username: string
  title: string
  label: string
  birthDate: string
  email: string
  profiles: Profile[]
}
