import { Text, Button, useMantineColorScheme, Navbar, AppShell, Header, Title } from "@mantine/core"

export default function Home() {

    const {colorScheme, toggleColorScheme} = useMantineColorScheme()

    return (
        <AppShell
            padding='md'
            navbar={<Navbar width={{ base: 300 }} height='auto' p="xs"><NavbarContent /></Navbar>}
            header={<Header height={60} p="xs"><HeaderContent /></Header>}
            styles={(theme) => ({
                main: { backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
        >
            <AppContent />
        </AppShell>
    )
}

function NavbarContent() {
    return (
        <>
            <Title
                order={2}
            >
                Watchlist
            </Title>
            <Text>Item A</Text>
            <Text>Item B</Text>
        </>
    )
}

function HeaderContent() {
    return (
        <Title>Limo Trading</Title>
    )
}

function AppContent() {
    return (
        <>
            <Title>This is the app</Title>
        </>
    )
}