import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Item from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function CardKey() {
  return (
    <>
      <Box id="key" sx={{ paddingTop: "100px" }}></Box>
      <Box
        sx={{
          marginTop: "50px",
          backgroundColor: "#1D741D",
          width: "30px",
          height: "2px",
          marginLeft: "0px",
        }}
      ></Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: 30,
          marginTop: "0px",
          marginBottom: "10px",
          fontFamily: "Lato",
          fontWeight: 700,
          marginLeft: "0px",
        }}
      >
        <Typography variant="inline" sx={{ color: "#1D741D" }}>
          K
        </Typography>
        ey Accomplishments (2023)
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          p: 0,
          m: 0,
          // maxWidth: 820,
          justifyContent: "flex-start",
          gap: "12px",
        }}
      >
        <Card
          sx={{
            width: "400px",
            // marginRight: "12px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Digital Modernization
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                >
                  Consolidation of 7 Platforms, 17 Design Languages & 350
                  Applications to 1 Enterprise{" "}
                  <Typography
                    variant="inline"
                    sx={{ color: "#1D741D", fontWeight: "700" }}
                  >
                    MFE
                  </Typography>{" "}
                  Design System.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "400px",
            // marginRight: "12px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Full Stack CDE
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.4,
                  }}
                >
                  Developer Experience{" "}
                  <Typography
                    variant="inline"
                    sx={{ color: "#1D741D", fontWeight: "700" }}
                  >
                    (DX)
                  </Typography>{" "}
                  Easy Button. E2E App Dev for rapid and consistant outcomes.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "400px",
            marginRight: "0px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Cookieless Domain CDN
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                >
                  New Asset CDN built to perform.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: "400px",
            // marginRight: "12px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  CI/CD Pipelines
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.4,
                  }}
                >
                  Proactive Code Quality linters, accessibility and testing toll
                  gates.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "400px",
            marginRight: "0px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Merchandising
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                >
                  1 Core{" "}
                  <Typography
                    variant="inline"
                    sx={{ color: "#1D741D", fontWeight: "700" }}
                  >
                    Atomic
                  </Typography>{" "}
                  product that builds all products. Build once & consume across
                  the{" "}
                  <Typography
                    variant="inline"
                    sx={{ color: "#1D741D", fontWeight: "700" }}
                  >
                    Omni
                  </Typography>{" "}
                  channel.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "400px",
            // marginRight: "12px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Operations
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.4,
                  }}
                >
                  E2E Supply Chain Analysis & Mapping.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "400px",
            marginRight: "0px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Anatomy of a Web Page.
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                >
                  Quick tracking/view of all the building blocks of an
                  application
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>

        <Card
          sx={{
            width: "400px",
            marginRight: "0px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Communications
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                >
                  1 connected dictionary to facilitate a common communication
                  for all.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "400px",
            // marginRight: "12px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Optimizations
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                >
                  73% increased converted account from Marketing campaigns.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "400px",
            marginRight: "0px",
            // marginBottom: "12px",
            backgroundColor: "#E2EFE3",
            border: "solid 2px #ffffff",
          }}
        >
          <CardContent sx={{ padding: "0px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 1,
                m: 1,
                borderRadius: 1,
                padding: "0px",
              }}
            >
              <Item sx={{}}>
                <img src="CardBullet.png" alt="bullet" />
              </Item>
              <Item sx={{ marginLeft: "5px" }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: 24,
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontFamily: "Lato",
                    fontWeight: 700,
                  }}
                >
                  Consumers
                </Typography>
                <Typography
                  variant="body"
                  sx={{
                    fontSize: 18,
                    marginTop: "0px",
                    fontFamily: "DM Sans",
                    fontWeight: 500,
                    letterSpacing: 0.2,
                  }}
                >
                  1 Catalog for all developers to shop from.
                </Typography>
              </Item>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default CardKey;
