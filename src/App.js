import React from "react"
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/cb"

import {
  FlexBox,
  Heading,
  FullScreen,
  Appear,
  Slide,
  Deck,
  Box,
  Image,
  CodePane,
  Notes,
  Text,
} from "spectacle"

// Spectacle theme
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
}

// Spectacle Template
const template = (props) => {
  const { slideNumber } = props
  const isFirstSlide = slideNumber === 1
  return (
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      {isFirstSlide && (
        <>
          <Box
            padding="0"
            position="absolute"
            right={-20}
            bottom={690}
            zIndex={999}
          >
            <FullScreen color="white" />
          </Box>
        </>
      )}
    </FlexBox>
  )
}

const LogoMatosinhosTech = () => (
  <FlexBox flexDirection="column">
    <img
      alt="Matosinhos"
      src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIyNnB4IiAgc3R5bGU9InRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKSIgaGVpZ2h0PSIxMTFweCIgdmlld0JveD0iMCAwIDIyNiAxMTEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjUuMiAoMjUyMzUpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9ImxvZ28iIHNrZXRjaDp0eXBlPSJNU0xheWVyR3JvdXAiIGZpbGw9IiNmYWZhZmEiPgogICAgICAgICAgICA8ZyBpZD0iUGFnZS0xIiBza2V0Y2g6dHlwZT0iTVNTaGFwZUdyb3VwIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzguMzUyMjgyLDU2LjEwNzgzNDggTDE1OS45NTA0NDYsMTAxLjI1MjU1MiBDMTU3LjU1MDU3MiwxMDcuMTQwMDk3IDE1MS44NjU4MjQsMTEwLjY5OTgyMyAxNDUuODc1NTc3LDExMC42Nzc4OTIgQzEzOS44ODAwODksMTEwLjcwMDMzOSAxMzQuMTkxMzE4LDEwNy4xMzQ3MyAxMzEuNzk0NjMsMTAxLjI0MDQ1OCBMMTEzLjQzMjg4OSw1Ni4wODI2NzkyIEwxMTEuMzUyNDM5LDYxLjE4NjU3MSBDMTExLjMyNzE5NSw2MS4yNDg0OTk0IDExMS4zMDE1ODksNjEuMzEwMTcwMiAxMTEuMjc1NjIyLDYxLjM3MTU4MTkgTDk1LjAyMDU3NjMsMTAxLjI1MjIzMyBDOTIuNjIzMjQ3MiwxMDcuMTMzOTE3IDg2Ljk0NzU4ODIsMTEwLjY5MjUzMyA4MC45NjM5NzYxLDExMC42Nzc5NDggQzc0Ljk4MDUwODUsMTEwLjY5MjUxMiA2OS4zMDQ5NjQyLDEwNy4xMzQwNTMgNjYuOTA3NTUzNiwxMDEuMjUyNTUyIEw0OC40NjMwMjAzLDU2LjAwMzA4NjEgTDMwLjAxNTAyMzUsMTAxLjI3NDEzNiBDMjYuODYwODUwNCwxMDkuMDE0NDIgMTguMDI5MTQ4LDExMi43MzIxOTcgMTAuMjg4ODY0MywxMDkuNTc4MDI0IEMyLjU0ODU4MDUsMTA2LjQyMzg1IC0xLjE2OTE5NjcsOTcuNTkyMTQ4IDEuOTg0OTc2NDcsODkuODUxODY0MyBMMzQuNDA2OTc2NSwxMC4yODg4NjQzIEMzNi44MDM2MTUxLDQuNDA3NTU2NjQgNDIuNDc4MTM2MywwLjg0ODYxNTY3NyA0OC40NjExMTYyLDAuODYyMDQ0NjA4IEM1NC40NDM0NDY5LDAuODQ4NzEzODQ0IDYwLjExNzQ0ODgsNC40MDY5NjAwNSA2Mi41MTQ0NDY0LDEwLjI4NzQ0ODEgTDgwLjk2MzU0NTQsNTUuNTQ4MTE0OCBMODMuMzIyNDIzNyw0OS43NjA3NjY5IEM4My4zNDc3NTk2LDQ5LjY5ODYwNyA4My4zNzM0NjE2LDQ5LjYzNjcwNjcgODMuMzk5NTI2Myw0OS41NzUwNjczIEw5OS40MTM1NjE0LDEwLjI4ODQyOSBDMTAxLjc0Nzk2NCw0LjU2MTUyNTQzIDEwNy4xOTA0MzIsMS4wMzcxNTE1MSAxMTIuOTk4ODY1LDAuODY5Mjg1ODM0IEMxMTkuMTQ0MTM3LDAuNjc3ODgwODA2IDEyNS4wMzk5MDEsNC4yNzA1NDU0NSAxMjcuNDkxMzcsMTAuMjk5NTQxNiBMMTQ1Ljg5MjIzOSw1NS41NTM1NTAxIEwxNjQuMzQzNTU0LDEwLjI4NzQ0ODEgQzE2Ni43OTk0ODEsNC4yNjIzOTAyNiAxNzIuNjk1NTIxLDAuNjc1MTYwODg1IDE3OC44Mzg2MTksMC44Njk1MjI0MSBDMTg0LjY1MTMwMiwxLjA0MDc0NTUxIDE5MC4wOTQ4NjIsNC41NzMzNjgyNSAxOTIuNDIzMTMxLDEwLjMwNzMzNjMgTDIxMy4zODIxMzEsNjEuOTI0MzM2MyBDMjEzLjQwNzI5Myw2MS45ODYzMDU5IDIxMy40MzIwMTYsNjIuMDQ4MzQ0OCAyMTMuNDU2Myw2Mi4xMTA0NDk2IEwyMjQuNzY2MDIyLDg5Ljk2MjA2OTYgQzIyNy45MTA2OTMsOTcuNzA2MjE4OCAyMjQuMTgyMDgsMTA2LjUzMzM1MiAyMTYuNDM3OTMsMTA5LjY3ODAyMiBDMjA4LjY5Mzc4MSwxMTIuODIyNjkzIDE5OS44NjY2NDgsMTA5LjA5NDA4IDE5Ni43MjE5NzgsMTAxLjM0OTkzIEwxODUuMzM2OTc4LDczLjMxMjkzMDQgQzE4NS4zMTE3NCw3My4yNTA3Nzk1IDE4NS4yODY5NDUsNzMuMTg4NTU5IDE4NS4yNjI1OTEsNzMuMTI2MjcyMSBMMTc4LjM1MjI4Miw1Ni4xMDc4MzQ4IEwxNzguMzUyMjgyLDU2LjEwNzgzNDggTDE3OC4zNTIyODIsNTYuMTA3ODM0OCBaIiBpZD0ibG9nbyI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
      width="56"
      height="100%"
    />
    <span
      style={{
        lineHeight: 1,
        fontSize: "1rem",
        fontWeight: "900",
        color: "white",
        fontFamily: "Mulish",
      }}
    >
      .tech
    </span>
  </FlexBox>
)

const SignificaLogoName = () => {
  return (
    <FlexBox width={300} height="auto">
      <svg
        viewBox="0 0 96 25"
        xmlns="http://www.w3.org/2000/svg"
        class="Logo__Svg-vm6dkj-0 bHaKjf"
      >
        <g fill-rule="evenodd">
          <path d="M0 13.514h3.792c.052 1.134.955 2.14 2.657 2.14 1.522 0 2.58-.722 2.606-1.882.025-.8-.336-1.495-2.142-2.01l-2.14-.593C.85 9.957.18 7.663.18 6.065c0-3.17 2.708-5.31 6.113-5.31 3.431 0 6.01 2.037 6.01 5.439H8.54c0-1.186-.8-2.01-2.296-2.01-1.316 0-2.296.721-2.296 1.778 0 .464.18 1.315 1.909 1.804l2.115.67c4.308 1.238 4.927 3.66 4.876 5.362-.052 3.53-3.25 5.206-6.398 5.206C2.58 19.004 0 16.71 0 13.514zM18.55 6.684V18.72h-3.56V6.684zM14.525 2.225c0-1.186 1.032-2.088 2.244-2.088 1.213 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113-1.212 0-2.244-.928-2.244-2.113zM23.775 19.571c.413 1.109 1.832 1.933 3.044 1.933 2.734 0 3.483-1.881 3.328-4.278-.568 1.108-2.116 1.752-3.612 1.752-3.095 0-6.01-2.448-6.01-6.237 0-3.866 2.915-6.315 6.01-6.315 1.496 0 3.018.644 3.612 1.753V6.684h3.482v10.361c0 5.181-2.528 7.681-6.81 7.681-2.657 0-4.927-1.495-5.933-3.737.903-.438 1.986-.98 2.889-1.418zm6.294-6.907c0-1.805-1.418-2.836-2.915-2.836-1.522 0-2.889 1.134-2.889 2.836 0 1.804 1.367 2.938 2.89 2.938 1.47 0 2.914-1.186 2.914-2.938zM39.51 12.354v6.367h-3.587V6.684h3.586v1.752c.645-1.211 2.064-2.01 3.483-2.01 2.708 0 4.41 1.675 4.41 5.103v7.192h-3.585v-6.418c0-1.598-.877-2.397-2.09-2.397-1.263 0-2.218.618-2.218 2.448zM53.275 6.684V18.72h-3.56V6.684zM49.25 2.225c0-1.186 1.033-2.088 2.245-2.088 1.212 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113-1.212 0-2.244-.928-2.244-2.113zM63.288.137v3.428h-.593c-1.238 0-1.831.876-1.831 2.294v.825h2.424v2.835h-2.424v9.202h-3.612V9.519h-2.27V6.684h2.27v-.825c0-3.686 1.986-5.722 5.443-5.722h.593zM68.658 6.684V18.72h-3.56V6.684zM64.634 2.225c0-1.186 1.031-2.088 2.244-2.088 1.212 0 2.193.902 2.193 2.088 0 1.185-.98 2.113-2.193 2.113s-2.244-.928-2.244-2.113zM70.443 12.664c0-3.79 3.095-6.238 6.552-6.238 2.141 0 4.076.928 5.237 2.552l-2.915 2.087c-.49-.773-1.393-1.211-2.322-1.211-1.522 0-2.992 1.083-2.992 2.81 0 1.726 1.47 2.886 2.992 2.886.929 0 1.832-.438 2.322-1.211l2.915 2.062c-1.135 1.624-3.07 2.577-5.237 2.577-3.457 0-6.552-2.526-6.552-6.314zM92.327 18.72v-1.365c-.774 1.16-2.58 1.598-3.508 1.598-3.07 0-6.14-2.397-6.14-6.264 0-3.866 3.07-6.263 6.14-6.263.773 0 2.58.258 3.508 1.598v-1.34h3.56V18.72h-3.56zm-5.933-6.03c0 1.726 1.522 2.86 3.018 2.86 1.47 0 2.915-1.056 2.915-2.86 0-1.805-1.445-2.862-2.915-2.862-1.496 0-3.018 1.134-3.018 2.861z"></path>
        </g>
      </svg>
    </FlexBox>
  )
}

const App = () => {
  return (
    <Deck theme={theme} template={template}>
      <Slide backgroundColor="black">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="white"
            >
              Survival kit to build your POC
            </Heading>
            <FlexBox justifyContent="space-between" maxWidth={320} width="100%">
              <Image
                alt="Hasura Logo"
                src="/hasura_logo_colour.png"
                height="auto"
                width={223}
              />
              <LogoMatosinhosTech />
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Image
          style={{ position: "absolute", bottom: 32, right: 100 }}
          alt="Egg 1"
          src="/eggs1.png"
          height="auto"
          width={570}
        />
        <Image
          style={{ position: "absolute", bottom: 32, right: 0 }}
          alt="Egg 2"
          src="/eggs2.png"
          height="auto"
          width={320}
        />
        <Notes>
          <ul>
            <li>
              Olá. Bem-vindos à minha talk. Quero desde já agradecer ao Nélson
              pelo convite. Estou aqui com muito gosto a dar o meu contributo.
              Parabéns pela excelente iniciativa. Só espero que venha a crescer
              pois a partilha de conhecimento é uma coisa boa. Num país tão
              pequeno como o nosso temos muito talento, principalmente aqui no
              norte. Parabéns ao José e ao Nélson da EQS pela apresentação, foi
              muito porreira.
            </li>
            <li>Sem mais demoras vamos iniciar a talk...</li>
            <li>
              O meu nome é Márcio Pinto e hoje vou mostrar-vos como o Hasura
              pode ser um canivete suíço para rapidamente construirem um POC. Já
              vamos aprofundar um pouco o tema e falar do desafio em si.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="white" style={{ padding: 16 }} className="slide">
        <FlexBox
          height="100%"
          alignItems="flex-start"
          justifyContent="flex-start"
          style={{ padding: 0 }}
        >
          <FlexBox
            flexDirection="column"
            height="100%"
            width="50%"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <Heading
              style={{ margin: 0, padding: 24, fontWeight: "normal" }}
              className="title"
              color="black"
            >
              Who am I?
            </Heading>
            <Appear>
              <Image
                alt="Egg"
                src="/egg.png"
                height="auto"
                width={390}
                style={{ marginLeft: 12 }}
              />
            </Appear>
          </FlexBox>
          <FlexBox height="100%" width="50%" backgroundColor="black">
            <Appear>
              <div className="code-wrapper">
                <CodePane
                  theme={a11yDark}
                  highlightRanges={[1, 8]}
                  language="jsx"
                >
                  {`
              import { 
                createClient, 
                background, 
                knowledge, 
                Provider as FullstackDeveloper } from '@package/marcio-pinto';

              const client = createClient({ background, knowledge });

                const Product = () => (
                  <FullstackDeveloper value={client}>
                    <App />
                  </FullstackDeveloper>
                );
            `}
                </CodePane>
              </div>
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Falando um pouco de mim, como já disse anteriormente, sou o
              Márcio.
            </li>
            <li>
              Sou a pessoa de mais idade a trabalhar na significa ou pelo menos
              costumava ser. Parece que contrataram alguém mais velho e fui
              destronado.
            </li>
            <li>
              A minha formação original é design, mas sou fullstack developer
              que trabalha principalmente em javascript, React no frontend
              (React-Native em mobile) e Node no backend.{" "}
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="#FFC401">
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <FlexBox marginTop={24}>
            <SignificaLogoName />
          </FlexBox>
          <Appear>
            <FlexBox
              style={{
                position: "absolute",
                right: -300,
                width: "100%",
                height: "75%",
              }}
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Image
                style={{ position: "relative", zIndex: 15 }}
                alt="Ellipse 1"
                src="/ellipse-1.png"
                height="auto"
                width="25%"
              />

              <Image
                style={{ left: -100, position: "relative", zIndex: 10 }}
                alt="Ellipse 2"
                src="/ellipse-2.png"
                height="auto"
                width="25%"
              />

              <Image
                style={{ left: -200, position: "relative", zIndex: 10 }}
                alt="Ellipse 3"
                src="/ellipse-3.png"
                height="auto"
                width="25%"
              />

              <Image
                style={{ left: -300, position: "relative", zIndex: 10 }}
                alt="Ellipse 4"
                src="/ellipse-4.png"
                height="auto"
                width={280}
              />
            </FlexBox>
          </Appear>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Trabalho com a Significa que é uma agencia de produtos digitais.
            </li>
            <li>
              Estamos localizados no Porto, na rua da torrinha. E quando o
              COVID-19 acalmar, sintam-se à vontade para nos visitar. Teremos
              todo o gosto em vos receber.{" "}
            </li>
            <li>Até lá podem visitar o nosso site: significa.co.</li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="black">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="white"
            >
              The challenge
            </Heading>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              maxWidth={320}
              width="100%"
            >
              <Appear>
                <Heading
                  style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                  className="title title-secondary"
                  color="white"
                >
                  Proof
                </Heading>
              </Appear>
              <Appear>
                <Heading
                  style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                  className="title title-secondary"
                  color="white"
                >
                  Of
                </Heading>
              </Appear>
              <Appear>
                <Heading
                  style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                  className="title title-secondary"
                  color="white"
                >
                  Concept
                </Heading>
              </Appear>
            </FlexBox>
          </FlexBox>
          <FlexBox width="50%">
            <Appear>
              <Image src="/poc.png" width="100%" height="auto" />
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Vou agora partilhar um pouco da minha experiência que tive num
              desafio recente. A meu ver, é um bom caminho a se seguir e vou
              partilhar aqui um pouco do meu conhecimento que obtive durante a
              minha jornada. Espero que vos seja útil ou possa vir a ser.
            </li>
            <li>
              Na Significa tivemos recentemente um desafio de construir um POC,
              com um prazo bastante apertado de execução. Para quem não sabe o
              que POC é, significa proof of concept ou em português (prova de
              conceito), onde o objectivo é verificar se uma ideia funciona ou
              não mediante o scope do projeto e os recursos necessários para
              tal.
            </li>
            <li>
              São usadas algumas métricas de sucesso com testes de execução para
              verificar se a coisa funciona ou não.
            </li>
            <li>Desafio: Construir uma app e uma API que fosse sólida.</li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="white">
        <FlexBox
          height="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Heading
            style={{ margin: 0, padding: 0, fontWeight: "normal" }}
            className="title"
            color="black"
          >
            How to solve this?
          </Heading>
          <FlexBox style={{ position: "absolute", right: -160, bottom: -50 }}>
            <Image alt="Solving" src="/solving.png" height="auto" width="90%" />
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Com este desafio em mãos, pusemos mãos à obra e fomos ver como
              poderiamos executá-lo da melhor forma.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="white">
        <FlexBox
          height="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Heading
            style={{ margin: 0, padding: 0, fontWeight: "normal" }}
            className="title"
            color="black"
          >
            Possible solutions:
          </Heading>
          <FlexBox
            height="80%"
            alignItems="center"
            width="100%"
            justifyContent="center"
          >
            <FlexBox alignItems="center">
              <Appear>
                <Image
                  alt="Firebase"
                  src="/logo-firebase.png"
                  height="auto"
                  width={240}
                />
              </Appear>
            </FlexBox>
            <FlexBox alignItems="center" paddingLeft={98}>
              <Appear>
                <Image alt="Fauna" src="/fauna.png" height="auto" width={240} />
              </Appear>
            </FlexBox>
            <FlexBox alignItems="center" paddingLeft={98}>
              <Appear>
                <Image
                  alt="Hasura"
                  src="/hasura_logo_colour.png"
                  height="auto"
                  width={240}
                />
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>Primeira solução seria o Firebase.</li>
            <li>
              Produto da Google, bem documentado mas com um grau considerável de
              complexidade para encontrar seja o que for e muitos steps para
              fazer setup.
            </li>
            <li>
              Bastante popular, bom suporte mas é Google. Hoje existe, amanhã
              poderá acabar.
            </li>
            <li>
              Outra solução seria o Fauna. Boa documentação mas a meu ver com
              uma grande limitação à partida.
            </li>
            <li>
              Tem uma curva de aprendizagem para FQL (Fauna Query language). O
              que nos faria ter de investir mais tempo para aprender FQL.
            </li>
            <li>
              Tanto Firebase, como o Fauna, funcionam com um amontuado de magia
              desconhecida. É depender inteiramente duma coisa sem a conhecer e
              não traz muito confiança ao developer. O developer precisa de
              entender como funcionam as coisas. Ou pelo menos deveria.
            </li>
            <li>
              Tanto firebase como Fauna são vendor locked. Quer dizer que para
              escalar o projecto vamos ter gastos adicionais. Pode compensar ou
              não, depende do caso.
            </li>
            <li>Por último, temos o Hasura. Será esta a melhor solução?</li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="white">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="black"
            >
              Hasura is the way. Why?
            </Heading>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              maxWidth={320}
              width="100%"
            >
              <Appear>
                <Image
                  alt="Hasura Logo"
                  src="/hasura_logo_colour.png"
                  height="auto"
                  width={223}
                />
              </Appear>
            </FlexBox>
          </FlexBox>
          <FlexBox
            width="50%"
            height="100%"
            style={{ borderLeft: "1px solid black" }}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    01.
                  </Text>
                  <Text className="text" color="black">
                    Uses Postgres and turns it into a magic GraphQL endpoint
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    02.
                  </Text>
                  <Text className="text" color="black">
                    It's open source.
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear activeStyle={{ opacity: 1, width: "100%" }}>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    03.
                  </Text>
                  <Text className="text" color="black">
                    Written in Haskell.
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    04.
                  </Text>
                  <Text className="text" color="black">
                    Great scaling with metadata permissions and database
                    migrations
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    05.
                  </Text>
                  <Text className="text" color="black">
                    Fast local development with docker-compose
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <Notes>
            Hasura é o caminho a seguir. E porquê?
            <ul>
              <li>
                O Hasura usa postgres e transforma num endpoint mágico de
                GraphQL. Tanto Posgres como GraphQL são entidades bem
                conhecidas, sendo que o GraphQL está a ganhar cada vez mais
                popularidade.
              </li>
              <li>
                É open source (conseguimos ver como funciona tudo e até
                contribuir para melhorar) e é escrito em Haskell. Se eu sei
                Haskell, claro que não. Mas na eventualidade do Hasura acabar
                amanhã, o desenvolvimento pode continuar.
              </li>
              <li>
                Migrações da base de dados e permissões de Metadata são de
                primeira classe e são geradas de forma automática via consola UI
                do Hasura. No caso das migrações de base dados, é criado o
                ficheiro de up e down de SQL para ser possível reverter algo.
                Todos os dados metadata relacionados a permissões são guardados
                em ficheiros YAML separados, o que facilita imenso com o git
                diff para rapidamente identificar o que mudou relativamente a
                permissões na nossa base de dados.
              </li>
              <li>
                Flow de desenvolvimento fácil de preparar e de correr com
                docker-compose. Esforço muito baixo para configuração e
                velocidade de desenvolvimento bastante alta.
              </li>
            </ul>
          </Notes>
        </Notes>
      </Slide>
      <Slide backgroundColor="white">
        <FlexBox
          height="100%"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <FlexBox>
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="black"
            >
              Datamodel Schema
            </Heading>
          </FlexBox>
          <FlexBox style={{ position: "absolute", bottom: 100 }}>
            <Image
              alt="Solving"
              src="/slack-datamodel.png"
              height="auto"
              width="70%"
            />
          </FlexBox>
        </FlexBox>
        <Notes>
          Como se inicia esta jornada? Muito simples. Temos aqui um exemplo de
          datamodel schema. Basicamente é o ínicio do processo. Desenhamos a
          nossa base de dados que vamos usar com o Hasura. Relações entre as
          tabelas e tudo mais. Este exemplo foi retirado da documentção do
          Hasura.
        </Notes>
      </Slide>
      <Slide backgroundColor="black">
        <FlexBox
          height="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <FlexBox height="80%">
            <CodePane
              maxWidth="100%"
              height="80%"
              theme={a11yDark}
              language="sql"
              style={{ fontSize: 12 }}
              fontSize={12}
            >
              {`
            CREATE TABLE public.channel (
              id uuid NOT NULL,
              name text NOT NULL,
              is_public boolean NOT NULL,
              workspace_id uuid NOT NULL,
              created_at timestamp with time zone DEFAULT now() NOT NULL,
              updated_at timestamp with time zone DEFAULT now() NOT NULL,
              created_by uuid NOT NULL
          );
          CREATE TABLE public.channel_member (
              id uuid NOT NULL,
              channel_id uuid NOT NULL,
              user_id uuid NOT NULL,
              created_at timestamp with time zone DEFAULT now() NOT NULL,
              updated_at timestamp with time zone DEFAULT now() NOT NULL
          );
          CREATE TABLE public.channel_thread (
              id uuid NOT NULL,
              channel_id uuid NOT NULL,
              created_at timestamp with time zone DEFAULT now() NOT NULL,
              updated_at timestamp with time zone DEFAULT now() NOT NULL
          );
         
            `}
            </CodePane>
          </FlexBox>
        </FlexBox>
        <Notes>
          O que fazemos em seguida? Escrevemos o nosso ficheiro de sql
          (init.sql) que vai correr quando fazemos build inicial da nossa bd.
          Tanto o diagrama como depois este ficheiro de sql são totalmente
          agnósticos, o que significa que podemos usar com outra tecnologia sem
          ser Hasura.
        </Notes>
      </Slide>
      <Slide backgroundColor="black" padding={0}>
        <FlexBox height="100%">
          <video width="1300" height="auto" controls>
            <source src="/relationship.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </FlexBox>
        <Notes>
          <p>
            Gravei dois pequenos vídeos para demonstrar o que Hasura tem para
            oferecer mal acabamos de fazer o build da nossa API. Aqui já podemos
            ver o que ele criou para nós. sem fazermos nada. Não é espetacular?
          </p>
          <p>
            Temos um leque de opções de CRUD para as nossas tabelas acabadas de
            criar. Vamos ver agora como é fácil criar uma relação entre as duas
            tabelas, o que nos vai permitir agregar informação quando fizermos o
            pedido sobre o user.
          </p>
          <p>
            Em vez de fazermos dois pedidos separados para obter info do user e
            info dos todos, a partir de agora o user tem acesso aos todos.
          </p>
          Neste caso, temos um array vazio porque não existiam entradas na nossa
          tabela.
        </Notes>
      </Slide>
      <Slide backgroundColor="black" padding={0}>
        <FlexBox height="100%">
          <video width="1300" height="auto" controls>
            <source src="/userAccess.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </FlexBox>
        <Notes>
          <p>
            Neste vídeo vou mostrar a diferença no controlo de acesso à nossa
            base de dados, através do role e do user id nos headers do pedido
          </p>
          <p>
            Vamos aceder primeiro como admin, que é o role que tem acesso
            ilimitado na nossa bd e pode fazer todo o tipo de operaçãoes sem
            restrições.
          </p>
          <p>
            {" "}
            Uma query de todos como admin onde temos acesso às todos de todos os
            users{" "}
          </p>
          <p>
            Agora usamos o role e o user-id para controlar o acesso aos dados,
            fazendo com que cada user tenha acesso apenas aos seus dados.
            Simples não é?
          </p>
        </Notes>
      </Slide>
      <Slide backgroundColor="black">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="white"
            >
              Basic CRUD
            </Heading>
            <Appear>
              <Heading
                style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                className="title"
                color="#f2df91"
              >
                Queries
              </Heading>
            </Appear>
          </FlexBox>
          <FlexBox
            width="50%"
            flexDirection="column"
            height="100%"
            style={{ borderLeft: "1px solid white", paddingLeft: 20 }}
          >
            <Appear>
              <Image src="/queryTodos.png" width="100%" />
            </Appear>
            <Appear>
              <Image src="/queryResponse.png" width="100%" />
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>
          <p>
            Em jeito de resumo, falando dos CRUD (Create read update e delete)
          </p>
          <p>
            Queries que funcionam como leitura de dados. Aqui o exemplo que
            tinhamos há pouco no video com os todos. O pedido e a estrutura de
            dados da resposta.
          </p>
          <p>
            Quero só acrescentar que o hasura já está preparado para fazer
            paginação com quase zero esforço e permite também fazer ordenação e
            filtragem.
          </p>
        </Notes>
      </Slide>

      <Slide backgroundColor="black">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="white"
            >
              Basic CRUD
            </Heading>
            <Appear>
              <Heading
                style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                className="title"
                color="#f2df91"
              >
                Mutations
              </Heading>
            </Appear>
          </FlexBox>
          <FlexBox
            width="50%"
            flexDirection="column"
            height="100%"
            style={{ borderLeft: "1px solid white", paddingLeft: 20 }}
          >
            <Appear>
              <Image src="/mutationTodos.png" width="100%" />
            </Appear>
            <Appear>
              <Image src="/updateTodos.png" width="100%" />
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>
          <p>
            Mutations que funcionam para escrever, atualizar ou apagar dados.
            Aqui têm dois exemplos, um para inserir uma nova entrada (usando
            variáveis, definindo os tipos) e um update através do id da entrada,
            que é a nossa primary key.
          </p>
        </Notes>
      </Slide>

      <Slide backgroundColor="black">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="white"
            >
              Basic CRUD
            </Heading>
            <Appear>
              <Heading
                style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                className="title"
                color="#f2df91"
              >
                Subscriptions
              </Heading>
            </Appear>
          </FlexBox>
          <FlexBox
            width="50%"
            flexDirection="column"
            height="100%"
            style={{ borderLeft: "1px solid white", paddingLeft: 20 }}
          >
            <Appear>
              <Image src="/subscription.png" width="100%" />
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>
          <p>
            Subscrições funcionam como as queries mas sem necessidade de fazer
            novos pedidos para termos os nossos dados atualizados no frontend.
            Usamos websockets com channels para esse fim. Não precismos de fazer
            nada. O Hasura já tem tudo preparado para nós.
          </p>
        </Notes>
      </Slide>

      <Slide backgroundColor="black">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="white"
            >
              Basic and advanced CRUD
            </Heading>
            <Appear>
              <Text
                style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                className="text"
                color="white"
              >
                Combine with actions
              </Text>
            </Appear>
          </FlexBox>
          <FlexBox
            width="50%"
            flexDirection="column"
            height="100%"
            style={{ borderLeft: "1px solid white", paddingLeft: 20 }}
          >
            <Appear>
              <div className="code-wrapper">
                <CodePane
                  theme={a11yDark}
                  highlightRanges={[1, 8]}
                  language="jsx"
                >
                  {`
                _and_or_not_exists_eq_ne_in_nin_gt_lt_gte_lte_ceq_cne_cgt_clt_cgte_clte_is_null
                _like_nlike _ilike_nilike_similar_nsimilar
                _and _or, _where, limit, offset
                `}
                </CodePane>
              </div>
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Depois de verificarmos as operações básicas de CRUD, vamos ver
              como o Hasura se comporta com operações que requerem um pouco mais
              de complexidade e verificação no controlo de acesso aos dados da
              nossa BD.
            </li>
            <li>
              Como o Hasura compreende authentifcação com JWT, isso garante nos
              um novo poder maior no que toca a permissões.
            </li>
            <li>
              No token enviado é possível passar um array cheio de dados
              importantes como user_id e user_role, o que vai permitir fazer bem
              a gestão de acesso aos dados, para os vários tipos de operações
              disponíveis.
            </li>
            <li>
              Estes operadores de comparação permitem identificar e conjugar
              quase todos os cenários possíveis para controlar acesso a
              operações, como por exemplo dar update de um campo.
            </li>
          </ul>
        </Notes>
      </Slide>

      <Slide backgroundColor="white">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="black"
            >
              Permissions
            </Heading>
          </FlexBox>
          <FlexBox
            width="50%"
            flexDirection="column"
            height="100%"
            style={{ borderLeft: "1px solid black", paddingLeft: 20 }}
          >
            <Appear>
              <Image src="/rolePermissionsUserId.png" width="80%" />
            </Appear>
            <Appear>
              <Image src="/allPermissions.png" width="100%" />
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Fazendo o entroncamento entre os CRUDS e a sua relação com as
              permissões de acesso, podemos ver como é fácil de controlar acesso
              numa tabela, por exemplo pelo user id. Aqui usamos o operador de
              equal para verificar o id do user e dar acesso ou não na tabela de
              TODOS aos campos de description e title.
            </li>
            <li>
              Como podem ver nesta imagem, o admin por defeito tem acesso a
              tudo. Depois podemos inserir os roles que quisermos, com o acesso
              controlado que pretendemos em cada tabela.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="white">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-start"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="black"
            >
              Auth - JWT
            </Heading>
          </FlexBox>
          <FlexBox
            width="50%"
            flexDirection="column"
            height="100%"
            style={{ borderLeft: "1px solid black" }}
          >
            <Appear>
              <Image src="/jwt-auth1.webp" width="125%" />
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Há uns slides atrás eu mostrei como podemos usar o role e o user
              id nos pedidos. Mas isso não é propriamente seguro.
            </li>
            <li>
              Para resolver isto, sabemos que o Hasura aceita e compreende JSON
              WEB TOKENS mais conhecido por JWT. Permite nos passar muita
              informação relativa a um utilizador através de um token.
            </li>
            <li>
              Vendo o esquema nesta ilustração, penso que é fácil de perceber
              como funciona o flow.
            </li>
            <li>
              A ideia é que o nosso servidor vai retornar um token JWT, quando o
              utilizador se autentica e, depois, este vai ser usado pela nossa
              app para ser decoded e verificado pelo GraphQL engine. Com isto
              conseguimos autorizar e usar a metada presente no pedido.
            </li>
            <li>O que nos leva ao passo seguinte...</li>
          </ul>
        </Notes>
      </Slide>

      <Slide backgroundColor="white">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Box>
              <Heading
                style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                className="title"
                color="black"
              >
                Actions
              </Heading>
              <Heading
                style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                className="title"
                color="black"
              >
                Business logic
              </Heading>
            </Box>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              width="100%"
            >
              <Appear>
                <Image
                  alt="actions"
                  src="/actions.png"
                  height="auto"
                  width="100%"
                />
              </Appear>
            </FlexBox>
          </FlexBox>
          <FlexBox
            width="50%"
            height="100%"
            style={{ borderLeft: "1px solid black" }}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    01.
                  </Text>
                  <Text className="text" color="black">
                    Custom logic for complex operations
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    02.
                  </Text>
                  <Text className="text" color="black">
                    Webhooks with schema included in metadata
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear activeStyle={{ opacity: 1, width: "100%" }}>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    03.
                  </Text>
                  <Text className="text" color="black">
                    Lambda, Express route or any serveless function
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    04.
                  </Text>
                  <Text className="text" color="black">
                    Custom return in your promise
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    05.
                  </Text>
                  <Text className="text" color="black">
                    Sensitive operations and easy relations to existing tables
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <Notes>
            <ul>
              <li>Actions e Business logic</li>
              <li>
                As Actions são um ponto valioso dentro do ecossistema Hasura.
              </li>
              <li>
                Logica como signin e signup onde retornamos um token numa app e
                verificações mais complexas ou authorizations que devem ser
                feitas sempre pelo backend.
              </li>
              <li>
                As variavéis da nossz sessão são encaminhadas nesse pedido no
                webhook.
              </li>
              <li>
                Podemos ter lambada functions ou serviços em Node, com rotas em
                Express ou qualquer outra função serveless.{" "}
              </li>
              <li>
                Podemos ter um return customizado com output esperado dessa
                promise, devidamente tipado assim como os argumentos que esse
                endpoint recebe.
              </li>
              <li>
                Operações mais sensiveis como pagamentos e assim, ou multiplos
                pedidos ao nosso graphQL engine podem ser feitos com um só
                pedido.
              </li>
            </ul>
          </Notes>
        </Notes>
      </Slide>
      <Slide backgroundColor="white">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Box>
              <Heading
                style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                className="title"
                color="black"
              >
                Scheduled Tasks
              </Heading>
              <Heading
                style={{ margin: 0, padding: 0, fontWeight: "normal" }}
                className="title"
                color="black"
              >
                and CRON
              </Heading>
            </Box>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              width="100%"
            >
              <Appear>
                <Image alt="cron" src="/cron.png" height="auto" width="95%" />
              </Appear>
            </FlexBox>
          </FlexBox>
          <FlexBox
            width="50%"
            height="100%"
            style={{ borderLeft: "1px solid black" }}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    01.
                  </Text>
                  <Text className="text" color="black">
                    Invoke any webhook with arbitrary payloads of data
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    02.
                  </Text>
                  <Text className="text" color="black">
                    Classic CRON invoking at set intervals
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear activeStyle={{ opacity: 1, width: "100%" }}>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    03.
                  </Text>
                  <Text className="text" color="black">
                    Once event task on a given date and time
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    04.
                  </Text>
                  <Text className="text" color="black">
                    Great for scheduling emails, text messages, push
                    notifications...
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Outra feature bastante útil são as tarefas agendadas e os
              trabalhos CRON
            </li>
            <li>
              Permite-nos invocar qualquer webhook com payload de dados
              customizável.
            </li>
            <li>Correr CRON jobs clássicos com set intervals</li>
            <li>Executar uma tarefa numa data e hora especificas.</li>
            <li>
              Bom para agendamento de email, mensagens de texto, push
              notifications, etc...
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="white">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="black"
            >
              Event triggers
            </Heading>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              width="100%"
            >
              <Appear>
                <Image alt="event" src="/event.png" height="auto" width="95%" />
              </Appear>
            </FlexBox>
          </FlexBox>
          <FlexBox
            width="50%"
            height="100%"
            style={{ borderLeft: "1px solid black" }}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    01.
                  </Text>
                  <Text className="text" color="black">
                    Responding to change on specified table or field
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    02.
                  </Text>
                  <Text className="text" color="black">
                    Webhook invoked with new and old data
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear activeStyle={{ opacity: 1, width: "100%" }}>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    03.
                  </Text>
                  <Text className="text" color="black">
                    Information about who triggered the update (role, session
                    variables, etc...)
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Outra das features que o Hasura disponibiliza são os Event
              Triggers.
            </li>
            <li>
              No fundo faz com que o nosso engine seja reactivo onde for
              preciso, respondendo a mudanças em determinada tabela ou campo na
              nossa BD.
            </li>
            <li>
              Quando esse evento é disparado temos sempre acesso ao dados
              antigos e aos novos.
            </li>
            <li>
              Temos também a informação sobre quem fez disparar este evento,
              como o role do user, as variáveis de sessão, etc...
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="white" padding={0}>
        <FlexBox height="100%">
          <iframe
            allowFullScreen
            title="Hasura Todos"
            src="http://localhost:3000"
            height="100%"
            width="50%"
          />
          <iframe
            allowFullScreen
            title="Hasura Todos Double"
            src="http://localhost:3000"
            height="100%"
            width="50%"
          />
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Vou vos mostrar agora um exemplo, usando um dos tutoriais
              disponiveis de Hasura. Onde podemos ver como funcionam em real
              time as subscriptions.
            </li>
          </ul>
        </Notes>
      </Slide>
      <Slide backgroundColor="white">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="black"
            >
              Limitations
            </Heading>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="space-between"
              maxWidth={320}
              width="100%"
            >
              <Appear>
                <Image
                  alt="Hasura Logo"
                  src="/raw-egg.png"
                  height="auto"
                  width={320}
                />
              </Appear>
            </FlexBox>
          </FlexBox>
          <FlexBox
            width="50%"
            height="100%"
            style={{ borderLeft: "1px solid black" }}
            flexDirection="column"
            justifyContent="flex-end"
          >
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    01.
                  </Text>
                  <Text className="text" color="black">
                    Not an npm library
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    02.
                  </Text>
                  <Text className="text" color="black">
                    Remote Schema Annoying To Reload
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear activeStyle={{ opacity: 1, width: "100%" }}>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    03.
                  </Text>
                  <Text className="text" color="black">
                    More Granular Column Based Permissions
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    04.
                  </Text>
                  <Text className="text" color="black">
                    Slow Feature Releases
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
            <FlexBox width="100%" justifyContent="flex-start">
              <Appear>
                <FlexBox width="100%">
                  <Text className="text" color="black" fontWeight="bold">
                    05.
                  </Text>
                  <Text className="text" color="black">
                    Managing secret keys is annoying
                  </Text>
                </FlexBox>
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <ul>
            <li>
              Em jeito de conclusão, quero só deixar aqui alguma limitações que
              o Hasura tem a meu ver.
            </li>
            <li>
              Não está disponível como NPM package. Por isso, pode afastar
              alguns possíveis interessados, principalmente frontend developers.
            </li>
            <li>
              O remote schema tem que ser recarregado manualmente depois de
              alguma mudança no schema. Não acontece, mas por vezes é
              necessário.
            </li>
            <li>
              Apesar de ser possível controlar por campo de tabela quanto às
              permissões, penso que poderia ser mais straightfoward neste
              aspecto.
            </li>
            <li>
              Existe alguma lentidão no lançamento de features novas por parte
              do Hasura. Acho que poderiam ser um pouco mais céleres.
            </li>
            <li>
              Temos que lidar constantemente com secret keys e envs e ambientes
              diferentes e pode tornar-se um pouco chato de gerir isto tudo.
            </li>
          </ul>
        </Notes>
      </Slide>

      <Slide backgroundColor="black">
        <FlexBox
          justifyContent="flex-start"
          alignItems="flex-start"
          height="100%"
        >
          <FlexBox
            height="100%"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="space-between"
            width="50%"
          >
            <Heading
              style={{ margin: 0, padding: 0, fontWeight: "normal" }}
              className="title"
              color="white"
            >
              Obrigado!
            </Heading>
          </FlexBox>
        </FlexBox>
        <Image
          style={{ position: "absolute", bottom: 32, right: 100 }}
          alt="Egg 1"
          src="/eggs1.png"
          height="auto"
          width={570}
        />
        <Image
          style={{ position: "absolute", bottom: 32, right: 0 }}
          alt="Egg 2"
          src="/eggs2.png"
          height="auto"
          width={320}
        />

        <Notes>
          <ul>
            <li>
              Chegamos ao final da Talk. Quero agradecer mais uma vez ao Nélson
              a oportunidade de estar aqui na matosinhos tech a partilhar um
              pouco da minha experiência e conhecimento.
            </li>
            <li>
              Se quiserem saber mais sobre o tema, podem verificar no site
              oficial do Hasura. Eles têm imensos tutoriais e a documentação é
              boa.
            </li>
            <li>
              Se tiverem algum dúvida, terei todo gosto em esclarecer, se souber
              claro.
            </li>
            <li>Obrigado a todos mais uma vez e até breve.</li>
          </ul>
        </Notes>
      </Slide>
    </Deck>
  )
}

export default App
