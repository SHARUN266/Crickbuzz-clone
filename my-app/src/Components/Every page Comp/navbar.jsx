import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Link,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import {  ButtonProps,  useColorMode } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';

import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function WithSubnavigation(props:ButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  
  const { Sharun, onToggle } = useDisclosure();
   
  let data = JSON.parse(localStorage.getItem("Image"));
  // console.log('me local imaage',data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [image, setImage] = useState();
  function handleChange(event) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      let img = e.target.result;
      setImage(img);
    };
  }
  function handleLocal() {
    if (image == null) {
      alert("Please Fill The foam");
    } else {
      localStorage.setItem("Image", JSON.stringify(image));
      window.location.reload();
    }
  }
  function handleLogOut(){
    localStorage.setItem('bool','false')
  }
  
  

  return (
    <Box pos={"sticky"} top="0" zIndex="3">
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Choose Profile</FormLabel>
              <Input onChange={handleChange} type="file" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={handleLocal}
              color="fontcolor.100"
              bg="background.teal"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        bg={useColorModeValue("background.teal", "gray.800")}
        color={useColorModeValue("gray.800", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              Sharun ? (
                <CloseIcon w={3} h={3} />
              ) : (
                <HamburgerIcon w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Link href="/">
              <Image
                w="30%"
                src="https://www.cricbuzz.com/images/cb_logo.svg"
                alt="img"
              />
            </Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
           <Flex h="100%" justifyContent="center" alignItems="center">
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        bg=""
        color={'white'}
        w="fit-content"
        {...props}>
        {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
      </Button>
    </Flex>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"background.teal"}
            bg={"white"}
            href={"#"}
            _hover={{
              bg: "fontcolor.100",
            }}
            borderRadius="30px"
          >
            Cricbuzz Plus
          </Button>
          <Flex alignItems={"center"}>
            <Menu _hover={"hover.bg"}>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar size={"sm"} src={data} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={onOpen}>Edit Profile</MenuItem>
                <MenuItem onClick={onOpen}>Change Password</MenuItem>
                <MenuDivider />
                <MenuItem>
                  {" "}
                  <Link href="/SignIn" onClick={handleLogOut}> Log Out </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Stack>
      </Flex>

      <Collapse in={Sharun} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "white.200");
  const linkHoverColor = useColorModeValue("white", "white");
  const popoverContentBgColor = useColorModeValue("white", "white.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("groupHover.bg", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "background.teal" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"button.bg"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { Sharun, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={Sharun ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse
        in={Sharun}
        animateOpacity
        style={{ marginTop: "0!important" }}
      >
        <Stack
          mt={2}
          pl={2}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} to={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Live Score",
    href: "/liveScore",
  },
  {
    label: "Schedule",
    href: "/schedule",
  },
  {
    label: "Achieves",
  },
  {
    label: "News",
    children: [
      {
        label: "All Stories",
      },
      {
        label: "Cricbuzz plus",
      },
      {
        label: "Latest News",
      },
      {
        label: "Topics",
      },
      {
        label: "Spotlight",
      },
      {
        label: "Opinion",
      },
      {
        label: "Specials",
      },
      {
        label: "State & Analysis",
      },
      {
        label: "Inteviews",
      },
      {
        label: "Live Blogs",
      },
    ],
  },
  {
    label: "Videos",
    children: [
      {
        label: "All Videos",
      },
      {
        label: "Catelogue",
      },
      {
        label: "PlayList",
      },
    ],
  },
  {
    label: "Series",
    children: [
      {
        label: "trying to add api here......",
      },
    ],
  },
  {
    label: "More",
    children: [
      {
        label: "World Test Champion Ship",
        href: "https://www.cricbuzz.com/cricket-stats/points-table/test/icc-world-test-championship",
      },
      {
        label: "World Cup League",
        href: "https://www.cricbuzz.com/cricket-stats/points-table/odi/icc-men-cricket-world-cup-super-league",
      },
      {
        label: "Quiz",
        href: "https://www.cricbuzz.com/cricket-quiz",
      },
      {
        label: "Photos",
        href: "https://www.cricbuzz.com/cricket-photo-gallery",
      },
      {
        label: "Mobile Apps",
        href: "https://www.cricbuzz.com/mobileapps",
      },
      {
        label: "Careers",
        href: "https://www.cricbuzz.com/careers",
      },
      {
        label: "Contact Us",
        href: "https://www.cricbuzz.com/info/contact",
      },
    ],
  },
];
