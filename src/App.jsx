import React from 'react'

import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { PhotoCamera } from '@mui/icons-material'
import useStyles from './styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function App() {
    // create an instance
    const classes = useStyles()
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant='h6'>
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            Photo Album
                        </Typography>

                        <Typography variant='h5' align='center' color='textSecondary' paragraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quasi sed odio reiciendis ratione sint harum, nam dolorem? Atque quidem in ratione molestias natus debitis quia et ipsa nihil magnam.
                        </Typography>

                        <div className={classes.button}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        See my photos
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container styles={{ padding: "20px 0" }} className={classes.cardGridS} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card} onClick={() => alert(card + "Clicked")}>

                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://www.bovic.co.ke/wp-content/uploads/2021/04/Dell-XPS-13-7390.jpg"
                                        // image="https://source.unsplash.com/random"
                                        title="Dell XPS" />

                                    <div style={{ backgroundColor: "#FFF" }}>
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant='h5'>
                                                Dell XPS 13
                                            </Typography>
                                            <Typography className={classes.multiLineEllipsis}>
                                                Features up to 11th Gen Intel processors and 4K display, perfectly caters to your home computing and entertainment needs.Features up to 11th Gen Intel processors and 4K display, perfectly caters to your home computing and entertainment needs.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size='small' color='primary'>
                                                Watchlist
                                            </Button>
                                            <Button size='small' color='secondary' onClick={() => alert("Cart")}>
                                                Add To Cart
                                            </Button>
                                        </CardActions>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='textSecondary'>
                    Something here to give the footer a purpose</Typography>
            </footer>
        </>
    )
}
