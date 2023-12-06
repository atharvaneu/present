import store from 'store2'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface TLoginFormData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export default function Register() {
  const router = useRouter()
  const toast = useToast()
  // const { setUserId } = useLocalStorage()

  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState<TLoginFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState<boolean>(false)

  const SERVER_DOMAIN =
    process.env.NEXT_PUBLIC_API_URL || `http://localhost:3000`
  async function handleLogin() {
    // Validation start
    if (!/^\S+@\S+\.\S+$/.test(formData?.email)) {
      toast({
        title: 'Please enter a valid email',
        status: 'error',
        position: 'top',
        isClosable: false,
      })
      return
    }
    if (
      formData?.firstName.length === 0 ||
      formData?.lastName.length === 0 ||
      formData?.email.length === 0 ||
      formData?.password.length === 0
    ) {
      toast({
        title: 'Please enter all details',
        status: 'error',
        position: 'top',
        isClosable: false,
      })
      return
    }
    // Validation end

    setLoading(true)
    const res = await fetch(`/api/user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    setLoading(false)

    if (data?.error) {
      if (data?.error.toLowerCase() === 'user_not_exist') {
        toast({
          title: 'User does not exist',
          status: 'error',
          position: 'top',
          isClosable: false,
        })
      } else if (data?.error.toLowerCase() === 'password_not_match') {
        toast({
          title: 'Incorrect password',
          status: 'error',
          position: 'top',
          isClosable: false,
        })
      }
      return
    }
    // add user to localstorage

    store('user_id', data?.body?._id)
    store('user_name', data?.body?.firstName)
    toast({
      title: `Welcome back, ${data?.body?.firstName}`,
      status: 'success',
      position: 'top',
      isClosable: false,
    })

    router.push('/login')
  }

  return (
    <section className="w-full h-screen flex align-middle justify-center bg-stone-900">
      <Center>
        <Card maxW="md" className="">
          <CardHeader>
            <Heading className="text-stone-900">Register Here</Heading>
          </CardHeader>
          <CardBody>
            <Text>First Name</Text>
            <Input
              placeholder="Enter your first name"
              className="mt-1"
              size="md"
              value={formData?.firstName}
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    firstName: e.target.value,
                  }
                })
              }
            />

            <Text>Last Name</Text>
            <Input
              placeholder="Enter your last name"
              className="mt-1"
              size="md"
              value={formData?.lastName}
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    lastName: e.target.value,
                  }
                })
              }
            />

            <Text>Email</Text>
            <Input
              placeholder="Enter your email"
              className="mt-1"
              size="md"
              value={formData?.email}
              onChange={(e) =>
                setFormData((prev) => {
                  return {
                    ...prev,
                    email: e.target.value,
                  }
                })
              }
            />
            <Text className="mt-10">Password</Text>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                className="mt-1"
                value={formData?.password}
                onChange={(e) =>
                  setFormData((prev) => {
                    return {
                      ...prev,
                      password: e.target.value,
                    }
                  })
                }
              />
              <InputRightElement width="4.5rem" className="mt-1">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShow((prev) => !prev)}
                >
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </CardBody>
          <CardFooter>
            <Button
              _hover={{ color: '#EAEAEA', backgroundColor: '#373737' }}
              backgroundColor="#1C1C1C"
              color="#EAEAEA"
              onClick={() => handleLogin()}
              isLoading={loading}
            >
              Register
            </Button>
          </CardFooter>
        </Card>
      </Center>
    </section>
  )
}
