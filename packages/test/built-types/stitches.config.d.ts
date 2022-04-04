/// <reference types="react" />
import type * as Stitches from '@stitches/react'
export type { VariantProps } from '@stitches/react'
export declare const styled: <
		Type extends
			| import('@stitches/react/types/util').Function
			| keyof JSX.IntrinsicElements
			| import('react').ComponentType<any>,
		Composers extends (
			| string
			| import('@stitches/react/types/util').Function
			| import('react').ComponentType<any>
			| {
					[name: string]: unknown
			  }
		)[],
		CSS_1 = import('@stitches/react/types/css-util').CSS<
			{
				bp1: '(min-width: 520px)'
				bp2: '(min-width: 900px)'
				bp3: '(min-width: 1200px)'
				bp4: '(min-width: 1800px)'
				motion: '(prefers-reduced-motion)'
				hover: '(any-hover: hover)'
				dark: '(prefers-color-scheme: dark)'
				light: '(prefers-color-scheme: light)'
			},
			{
				colors: {
					hiContrast: string
					loContrast: string
					canvas: string
					panel: string
					transparentPanel: string
					shadowLight: string
					shadowDark: string
					blackA1: string
					blackA2: string
					blackA3: string
					blackA4: string
					blackA5: string
					blackA6: string
					blackA7: string
					blackA8: string
					blackA9: string
					blackA10: string
					blackA11: string
					blackA12: string
					whiteA1: string
					whiteA2: string
					whiteA3: string
					whiteA4: string
					whiteA5: string
					whiteA6: string
					whiteA7: string
					whiteA8: string
					whiteA9: string
					whiteA10: string
					whiteA11: string
					whiteA12: string
					goldA1: string
					goldA2: string
					goldA3: string
					goldA4: string
					goldA5: string
					goldA6: string
					goldA7: string
					goldA8: string
					goldA9: string
					goldA10: string
					goldA11: string
					goldA12: string
					bronzeA1: string
					bronzeA2: string
					bronzeA3: string
					bronzeA4: string
					bronzeA5: string
					bronzeA6: string
					bronzeA7: string
					bronzeA8: string
					bronzeA9: string
					bronzeA10: string
					bronzeA11: string
					bronzeA12: string
					brownA1: string
					brownA2: string
					brownA3: string
					brownA4: string
					brownA5: string
					brownA6: string
					brownA7: string
					brownA8: string
					brownA9: string
					brownA10: string
					brownA11: string
					brownA12: string
					orangeA1: string
					orangeA2: string
					orangeA3: string
					orangeA4: string
					orangeA5: string
					orangeA6: string
					orangeA7: string
					orangeA8: string
					orangeA9: string
					orangeA10: string
					orangeA11: string
					orangeA12: string
					amberA1: string
					amberA2: string
					amberA3: string
					amberA4: string
					amberA5: string
					amberA6: string
					amberA7: string
					amberA8: string
					amberA9: string
					amberA10: string
					amberA11: string
					amberA12: string
					yellowA1: string
					yellowA2: string
					yellowA3: string
					yellowA4: string
					yellowA5: string
					yellowA6: string
					yellowA7: string
					yellowA8: string
					yellowA9: string
					yellowA10: string
					yellowA11: string
					yellowA12: string
					limeA1: string
					limeA2: string
					limeA3: string
					limeA4: string
					limeA5: string
					limeA6: string
					limeA7: string
					limeA8: string
					limeA9: string
					limeA10: string
					limeA11: string
					limeA12: string
					grassA1: string
					grassA2: string
					grassA3: string
					grassA4: string
					grassA5: string
					grassA6: string
					grassA7: string
					grassA8: string
					grassA9: string
					grassA10: string
					grassA11: string
					grassA12: string
					greenA1: string
					greenA2: string
					greenA3: string
					greenA4: string
					greenA5: string
					greenA6: string
					greenA7: string
					greenA8: string
					greenA9: string
					greenA10: string
					greenA11: string
					greenA12: string
					tealA1: string
					tealA2: string
					tealA3: string
					tealA4: string
					tealA5: string
					tealA6: string
					tealA7: string
					tealA8: string
					tealA9: string
					tealA10: string
					tealA11: string
					tealA12: string
					cyanA1: string
					cyanA2: string
					cyanA3: string
					cyanA4: string
					cyanA5: string
					cyanA6: string
					cyanA7: string
					cyanA8: string
					cyanA9: string
					cyanA10: string
					cyanA11: string
					cyanA12: string
					mintA1: string
					mintA2: string
					mintA3: string
					mintA4: string
					mintA5: string
					mintA6: string
					mintA7: string
					mintA8: string
					mintA9: string
					mintA10: string
					mintA11: string
					mintA12: string
					skyA1: string
					skyA2: string
					skyA3: string
					skyA4: string
					skyA5: string
					skyA6: string
					skyA7: string
					skyA8: string
					skyA9: string
					skyA10: string
					skyA11: string
					skyA12: string
					blueA1: string
					blueA2: string
					blueA3: string
					blueA4: string
					blueA5: string
					blueA6: string
					blueA7: string
					blueA8: string
					blueA9: string
					blueA10: string
					blueA11: string
					blueA12: string
					indigoA1: string
					indigoA2: string
					indigoA3: string
					indigoA4: string
					indigoA5: string
					indigoA6: string
					indigoA7: string
					indigoA8: string
					indigoA9: string
					indigoA10: string
					indigoA11: string
					indigoA12: string
					violetA1: string
					violetA2: string
					violetA3: string
					violetA4: string
					violetA5: string
					violetA6: string
					violetA7: string
					violetA8: string
					violetA9: string
					violetA10: string
					violetA11: string
					violetA12: string
					purpleA1: string
					purpleA2: string
					purpleA3: string
					purpleA4: string
					purpleA5: string
					purpleA6: string
					purpleA7: string
					purpleA8: string
					purpleA9: string
					purpleA10: string
					purpleA11: string
					purpleA12: string
					plumA1: string
					plumA2: string
					plumA3: string
					plumA4: string
					plumA5: string
					plumA6: string
					plumA7: string
					plumA8: string
					plumA9: string
					plumA10: string
					plumA11: string
					plumA12: string
					pinkA1: string
					pinkA2: string
					pinkA3: string
					pinkA4: string
					pinkA5: string
					pinkA6: string
					pinkA7: string
					pinkA8: string
					pinkA9: string
					pinkA10: string
					pinkA11: string
					pinkA12: string
					crimsonA1: string
					crimsonA2: string
					crimsonA3: string
					crimsonA4: string
					crimsonA5: string
					crimsonA6: string
					crimsonA7: string
					crimsonA8: string
					crimsonA9: string
					crimsonA10: string
					crimsonA11: string
					crimsonA12: string
					redA1: string
					redA2: string
					redA3: string
					redA4: string
					redA5: string
					redA6: string
					redA7: string
					redA8: string
					redA9: string
					redA10: string
					redA11: string
					redA12: string
					tomatoA1: string
					tomatoA2: string
					tomatoA3: string
					tomatoA4: string
					tomatoA5: string
					tomatoA6: string
					tomatoA7: string
					tomatoA8: string
					tomatoA9: string
					tomatoA10: string
					tomatoA11: string
					tomatoA12: string
					sandA1: string
					sandA2: string
					sandA3: string
					sandA4: string
					sandA5: string
					sandA6: string
					sandA7: string
					sandA8: string
					sandA9: string
					sandA10: string
					sandA11: string
					sandA12: string
					oliveA1: string
					oliveA2: string
					oliveA3: string
					oliveA4: string
					oliveA5: string
					oliveA6: string
					oliveA7: string
					oliveA8: string
					oliveA9: string
					oliveA10: string
					oliveA11: string
					oliveA12: string
					sageA1: string
					sageA2: string
					sageA3: string
					sageA4: string
					sageA5: string
					sageA6: string
					sageA7: string
					sageA8: string
					sageA9: string
					sageA10: string
					sageA11: string
					sageA12: string
					slateA1: string
					slateA2: string
					slateA3: string
					slateA4: string
					slateA5: string
					slateA6: string
					slateA7: string
					slateA8: string
					slateA9: string
					slateA10: string
					slateA11: string
					slateA12: string
					mauveA1: string
					mauveA2: string
					mauveA3: string
					mauveA4: string
					mauveA5: string
					mauveA6: string
					mauveA7: string
					mauveA8: string
					mauveA9: string
					mauveA10: string
					mauveA11: string
					mauveA12: string
					grayA1: string
					grayA2: string
					grayA3: string
					grayA4: string
					grayA5: string
					grayA6: string
					grayA7: string
					grayA8: string
					grayA9: string
					grayA10: string
					grayA11: string
					grayA12: string
					gold1: string
					gold2: string
					gold3: string
					gold4: string
					gold5: string
					gold6: string
					gold7: string
					gold8: string
					gold9: string
					gold10: string
					gold11: string
					gold12: string
					bronze1: string
					bronze2: string
					bronze3: string
					bronze4: string
					bronze5: string
					bronze6: string
					bronze7: string
					bronze8: string
					bronze9: string
					bronze10: string
					bronze11: string
					bronze12: string
					brown1: string
					brown2: string
					brown3: string
					brown4: string
					brown5: string
					brown6: string
					brown7: string
					brown8: string
					brown9: string
					brown10: string
					brown11: string
					brown12: string
					orange1: string
					orange2: string
					orange3: string
					orange4: string
					orange5: string
					orange6: string
					orange7: string
					orange8: string
					orange9: string
					orange10: string
					orange11: string
					orange12: string
					amber1: string
					amber2: string
					amber3: string
					amber4: string
					amber5: string
					amber6: string
					amber7: string
					amber8: string
					amber9: string
					amber10: string
					amber11: string
					amber12: string
					yellow1: string
					yellow2: string
					yellow3: string
					yellow4: string
					yellow5: string
					yellow6: string
					yellow7: string
					yellow8: string
					yellow9: string
					yellow10: string
					yellow11: string
					yellow12: string
					lime1: string
					lime2: string
					lime3: string
					lime4: string
					lime5: string
					lime6: string
					lime7: string
					lime8: string
					lime9: string
					lime10: string
					lime11: string
					lime12: string
					grass1: string
					grass2: string
					grass3: string
					grass4: string
					grass5: string
					grass6: string
					grass7: string
					grass8: string
					grass9: string
					grass10: string
					grass11: string
					grass12: string
					green1: string
					green2: string
					green3: string
					green4: string
					green5: string
					green6: string
					green7: string
					green8: string
					green9: string
					green10: string
					green11: string
					green12: string
					teal1: string
					teal2: string
					teal3: string
					teal4: string
					teal5: string
					teal6: string
					teal7: string
					teal8: string
					teal9: string
					teal10: string
					teal11: string
					teal12: string
					cyan1: string
					cyan2: string
					cyan3: string
					cyan4: string
					cyan5: string
					cyan6: string
					cyan7: string
					cyan8: string
					cyan9: string
					cyan10: string
					cyan11: string
					cyan12: string
					mint1: string
					mint2: string
					mint3: string
					mint4: string
					mint5: string
					mint6: string
					mint7: string
					mint8: string
					mint9: string
					mint10: string
					mint11: string
					mint12: string
					sky1: string
					sky2: string
					sky3: string
					sky4: string
					sky5: string
					sky6: string
					sky7: string
					sky8: string
					sky9: string
					sky10: string
					sky11: string
					sky12: string
					blue1: string
					blue2: string
					blue3: string
					blue4: string
					blue5: string
					blue6: string
					blue7: string
					blue8: string
					blue9: string
					blue10: string
					blue11: string
					blue12: string
					indigo1: string
					indigo2: string
					indigo3: string
					indigo4: string
					indigo5: string
					indigo6: string
					indigo7: string
					indigo8: string
					indigo9: string
					indigo10: string
					indigo11: string
					indigo12: string
					violet1: string
					violet2: string
					violet3: string
					violet4: string
					violet5: string
					violet6: string
					violet7: string
					violet8: string
					violet9: string
					violet10: string
					violet11: string
					violet12: string
					purple1: string
					purple2: string
					purple3: string
					purple4: string
					purple5: string
					purple6: string
					purple7: string
					purple8: string
					purple9: string
					purple10: string
					purple11: string
					purple12: string
					plum1: string
					plum2: string
					plum3: string
					plum4: string
					plum5: string
					plum6: string
					plum7: string
					plum8: string
					plum9: string
					plum10: string
					plum11: string
					plum12: string
					pink1: string
					pink2: string
					pink3: string
					pink4: string
					pink5: string
					pink6: string
					pink7: string
					pink8: string
					pink9: string
					pink10: string
					pink11: string
					pink12: string
					crimson1: string
					crimson2: string
					crimson3: string
					crimson4: string
					crimson5: string
					crimson6: string
					crimson7: string
					crimson8: string
					crimson9: string
					crimson10: string
					crimson11: string
					crimson12: string
					red1: string
					red2: string
					red3: string
					red4: string
					red5: string
					red6: string
					red7: string
					red8: string
					red9: string
					red10: string
					red11: string
					red12: string
					tomato1: string
					tomato2: string
					tomato3: string
					tomato4: string
					tomato5: string
					tomato6: string
					tomato7: string
					tomato8: string
					tomato9: string
					tomato10: string
					tomato11: string
					tomato12: string
					sand1: string
					sand2: string
					sand3: string
					sand4: string
					sand5: string
					sand6: string
					sand7: string
					sand8: string
					sand9: string
					sand10: string
					sand11: string
					sand12: string
					olive1: string
					olive2: string
					olive3: string
					olive4: string
					olive5: string
					olive6: string
					olive7: string
					olive8: string
					olive9: string
					olive10: string
					olive11: string
					olive12: string
					sage1: string
					sage2: string
					sage3: string
					sage4: string
					sage5: string
					sage6: string
					sage7: string
					sage8: string
					sage9: string
					sage10: string
					sage11: string
					sage12: string
					slate1: string
					slate2: string
					slate3: string
					slate4: string
					slate5: string
					slate6: string
					slate7: string
					slate8: string
					slate9: string
					slate10: string
					slate11: string
					slate12: string
					mauve1: string
					mauve2: string
					mauve3: string
					mauve4: string
					mauve5: string
					mauve6: string
					mauve7: string
					mauve8: string
					mauve9: string
					mauve10: string
					mauve11: string
					mauve12: string
					gray1: string
					gray2: string
					gray3: string
					gray4: string
					gray5: string
					gray6: string
					gray7: string
					gray8: string
					gray9: string
					gray10: string
					gray11: string
					gray12: string
				}
				fonts: {
					untitled: string
					mono: string
				}
				space: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				sizes: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				fontSizes: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				radii: {
					1: string
					2: string
					3: string
					4: string
					round: string
					pill: string
				}
				zIndices: {
					1: string
					2: string
					3: string
					4: string
					max: string
				}
			},
			import('@stitches/react/types/config').DefaultThemeMap,
			{
				p: (value: Stitches.PropertyValue<'padding'>) => {
					padding: Stitches.PropertyValue<'padding'>
				}
				pt: (value: Stitches.PropertyValue<'paddingTop'>) => {
					paddingTop: Stitches.PropertyValue<'paddingTop'>
				}
				pr: (value: Stitches.PropertyValue<'paddingRight'>) => {
					paddingRight: Stitches.PropertyValue<'paddingRight'>
				}
				pb: (value: Stitches.PropertyValue<'paddingBottom'>) => {
					paddingBottom: Stitches.PropertyValue<'paddingBottom'>
				}
				pl: (value: Stitches.PropertyValue<'paddingLeft'>) => {
					paddingLeft: Stitches.PropertyValue<'paddingLeft'>
				}
				px: (value: Stitches.PropertyValue<'paddingLeft'>) => {
					paddingLeft: Stitches.PropertyValue<'paddingLeft'>
					paddingRight: Stitches.PropertyValue<'paddingLeft'>
				}
				py: (value: Stitches.PropertyValue<'paddingTop'>) => {
					paddingTop: Stitches.PropertyValue<'paddingTop'>
					paddingBottom: Stitches.PropertyValue<'paddingTop'>
				}
				m: (value: Stitches.PropertyValue<'margin'>) => {
					margin: Stitches.PropertyValue<'margin'>
				}
				mt: (value: Stitches.PropertyValue<'marginTop'>) => {
					marginTop: Stitches.PropertyValue<'marginTop'>
				}
				mr: (value: Stitches.PropertyValue<'marginRight'>) => {
					marginRight: Stitches.PropertyValue<'marginRight'>
				}
				mb: (value: Stitches.PropertyValue<'marginBottom'>) => {
					marginBottom: Stitches.PropertyValue<'marginBottom'>
				}
				ml: (value: Stitches.PropertyValue<'marginLeft'>) => {
					marginLeft: Stitches.PropertyValue<'marginLeft'>
				}
				mx: (value: Stitches.PropertyValue<'marginLeft'>) => {
					marginLeft: Stitches.PropertyValue<'marginLeft'>
					marginRight: Stitches.PropertyValue<'marginLeft'>
				}
				my: (value: Stitches.PropertyValue<'marginTop'>) => {
					marginTop: Stitches.PropertyValue<'marginTop'>
					marginBottom: Stitches.PropertyValue<'marginTop'>
				}
				ta: (value: Stitches.PropertyValue<'textAlign'>) => {
					textAlign: Stitches.PropertyValue<'textAlign'>
				}
				fd: (value: Stitches.PropertyValue<'flexDirection'>) => {
					flexDirection: Stitches.PropertyValue<'flexDirection'>
				}
				fw: (value: Stitches.PropertyValue<'flexWrap'>) => {
					flexWrap: Stitches.PropertyValue<'flexWrap'>
				}
				ai: (value: Stitches.PropertyValue<'alignItems'>) => {
					alignItems: Stitches.PropertyValue<'alignItems'>
				}
				ac: (value: Stitches.PropertyValue<'alignContent'>) => {
					alignContent: Stitches.PropertyValue<'alignContent'>
				}
				jc: (value: Stitches.PropertyValue<'justifyContent'>) => {
					justifyContent: Stitches.PropertyValue<'justifyContent'>
				}
				as: (value: Stitches.PropertyValue<'alignSelf'>) => {
					alignSelf: Stitches.PropertyValue<'alignSelf'>
				}
				fg: (value: Stitches.PropertyValue<'flexGrow'>) => {
					flexGrow: Stitches.PropertyValue<'flexGrow'>
				}
				fs: (value: Stitches.PropertyValue<'flexShrink'>) => {
					flexShrink: Stitches.PropertyValue<'flexShrink'>
				}
				fb: (value: Stitches.PropertyValue<'flexBasis'>) => {
					flexBasis: Stitches.PropertyValue<'flexBasis'>
				}
				bc: (value: Stitches.PropertyValue<'backgroundColor'>) => {
					backgroundColor: Stitches.PropertyValue<'backgroundColor'>
				}
				br: (value: Stitches.PropertyValue<'borderRadius'>) => {
					borderRadius: Stitches.PropertyValue<'borderRadius'>
				}
				btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => {
					borderTopRightRadius: Stitches.PropertyValue<'borderTopRightRadius'>
				}
				bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => {
					borderBottomRightRadius: Stitches.PropertyValue<'borderBottomRightRadius'>
				}
				bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => {
					borderBottomLeftRadius: Stitches.PropertyValue<'borderBottomLeftRadius'>
				}
				btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => {
					borderTopLeftRadius: Stitches.PropertyValue<'borderTopLeftRadius'>
				}
				bs: (value: Stitches.PropertyValue<'boxShadow'>) => {
					boxShadow: Stitches.PropertyValue<'boxShadow'>
				}
				lh: (value: Stitches.PropertyValue<'lineHeight'>) => {
					lineHeight: Stitches.PropertyValue<'lineHeight'>
				}
				ox: (value: Stitches.PropertyValue<'overflowX'>) => {
					overflowX: Stitches.PropertyValue<'overflowX'>
				}
				oy: (value: Stitches.PropertyValue<'overflowY'>) => {
					overflowY: Stitches.PropertyValue<'overflowY'>
				}
				pe: (value: Stitches.PropertyValue<'pointerEvents'>) => {
					pointerEvents: Stitches.PropertyValue<'pointerEvents'>
				}
				us: (value: Stitches.PropertyValue<'userSelect'>) => {
					WebkitUserSelect: Stitches.PropertyValue<'userSelect'>
					userSelect: Stitches.PropertyValue<'userSelect'>
				}
				userSelect: (value: Stitches.PropertyValue<'userSelect'>) => {
					WebkitUserSelect: Stitches.PropertyValue<'userSelect'>
					userSelect: Stitches.PropertyValue<'userSelect'>
				}
				size: (value: Stitches.PropertyValue<'width'>) => {
					width: Stitches.PropertyValue<'width'>
					height: Stitches.PropertyValue<'width'>
				}
				appearance: (value: Stitches.PropertyValue<'appearance'>) => {
					WebkitAppearance: Stitches.PropertyValue<'appearance'>
					appearance: Stitches.PropertyValue<'appearance'>
				}
				backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => {
					WebkitBackgroundClip: Stitches.PropertyValue<'backgroundClip'>
					backgroundClip: Stitches.PropertyValue<'backgroundClip'>
				}
			}
		>,
	>(
		type: Type,
		...composers: {
			[K in keyof Composers]: Composers[K] extends
				| string
				| import('@stitches/react/types/util').Function
				| import('react').ComponentType<any>
				? Composers[K]
				: import('@stitches/react/types/stitches').RemoveIndex<CSS_1> & {
						variants?:
							| {
									[x: string]: {
										[x: string]: CSS_1
										[x: number]: CSS_1
									}
							  }
							| undefined
						compoundVariants?:
							| (('variants' extends keyof Composers[K]
									? {
											[Name in keyof Composers[K][keyof Composers[K] &
												'variants']]?:
												| import('@stitches/react/types/util').String
												| import('@stitches/react/types/util').Widen<
														keyof Composers[K][keyof Composers[K] &
															'variants'][Name]
												  >
												| undefined
									  } & import('@stitches/react/types/util').WideObject
									: import('@stitches/react/types/util').WideObject) & {
									css: CSS_1
							  })[]
							| undefined
						defaultVariants?:
							| ('variants' extends keyof Composers[K]
									? {
											[Name_1 in keyof Composers[K][keyof Composers[K] &
												'variants']]?:
												| import('@stitches/react/types/util').String
												| import('@stitches/react/types/util').Widen<
														keyof Composers[K][keyof Composers[K] &
															'variants'][Name_1]
												  >
												| undefined
									  }
									: import('@stitches/react/types/util').WideObject)
							| undefined
				  } & {
						[K2 in keyof Composers[K]]: K2 extends
							| 'compoundVariants'
							| 'defaultVariants'
							| 'variants'
							? unknown
							: K2 extends keyof CSS_1
							? CSS_1[K2]
							: unknown
				  }
		}
	) => import('@stitches/react/types/styled-component').StyledComponent<
		Type,
		import('@stitches/react/types/styled-component').StyledComponentProps<Composers>,
		{
			bp1: '(min-width: 520px)'
			bp2: '(min-width: 900px)'
			bp3: '(min-width: 1200px)'
			bp4: '(min-width: 1800px)'
			motion: '(prefers-reduced-motion)'
			hover: '(any-hover: hover)'
			dark: '(prefers-color-scheme: dark)'
			light: '(prefers-color-scheme: light)'
		},
		import('@stitches/react/types/css-util').CSS<
			{
				bp1: '(min-width: 520px)'
				bp2: '(min-width: 900px)'
				bp3: '(min-width: 1200px)'
				bp4: '(min-width: 1800px)'
				motion: '(prefers-reduced-motion)'
				hover: '(any-hover: hover)'
				dark: '(prefers-color-scheme: dark)'
				light: '(prefers-color-scheme: light)'
			},
			{
				colors: {
					hiContrast: string
					loContrast: string
					canvas: string
					panel: string
					transparentPanel: string
					shadowLight: string
					shadowDark: string
					blackA1: string
					blackA2: string
					blackA3: string
					blackA4: string
					blackA5: string
					blackA6: string
					blackA7: string
					blackA8: string
					blackA9: string
					blackA10: string
					blackA11: string
					blackA12: string
					whiteA1: string
					whiteA2: string
					whiteA3: string
					whiteA4: string
					whiteA5: string
					whiteA6: string
					whiteA7: string
					whiteA8: string
					whiteA9: string
					whiteA10: string
					whiteA11: string
					whiteA12: string
					goldA1: string
					goldA2: string
					goldA3: string
					goldA4: string
					goldA5: string
					goldA6: string
					goldA7: string
					goldA8: string
					goldA9: string
					goldA10: string
					goldA11: string
					goldA12: string
					bronzeA1: string
					bronzeA2: string
					bronzeA3: string
					bronzeA4: string
					bronzeA5: string
					bronzeA6: string
					bronzeA7: string
					bronzeA8: string
					bronzeA9: string
					bronzeA10: string
					bronzeA11: string
					bronzeA12: string
					brownA1: string
					brownA2: string
					brownA3: string
					brownA4: string
					brownA5: string
					brownA6: string
					brownA7: string
					brownA8: string
					brownA9: string
					brownA10: string
					brownA11: string
					brownA12: string
					orangeA1: string
					orangeA2: string
					orangeA3: string
					orangeA4: string
					orangeA5: string
					orangeA6: string
					orangeA7: string
					orangeA8: string
					orangeA9: string
					orangeA10: string
					orangeA11: string
					orangeA12: string
					amberA1: string
					amberA2: string
					amberA3: string
					amberA4: string
					amberA5: string
					amberA6: string
					amberA7: string
					amberA8: string
					amberA9: string
					amberA10: string
					amberA11: string
					amberA12: string
					yellowA1: string
					yellowA2: string
					yellowA3: string
					yellowA4: string
					yellowA5: string
					yellowA6: string
					yellowA7: string
					yellowA8: string
					yellowA9: string
					yellowA10: string
					yellowA11: string
					yellowA12: string
					limeA1: string
					limeA2: string
					limeA3: string
					limeA4: string
					limeA5: string
					limeA6: string
					limeA7: string
					limeA8: string
					limeA9: string
					limeA10: string
					limeA11: string
					limeA12: string
					grassA1: string
					grassA2: string
					grassA3: string
					grassA4: string
					grassA5: string
					grassA6: string
					grassA7: string
					grassA8: string
					grassA9: string
					grassA10: string
					grassA11: string
					grassA12: string
					greenA1: string
					greenA2: string
					greenA3: string
					greenA4: string
					greenA5: string
					greenA6: string
					greenA7: string
					greenA8: string
					greenA9: string
					greenA10: string
					greenA11: string
					greenA12: string
					tealA1: string
					tealA2: string
					tealA3: string
					tealA4: string
					tealA5: string
					tealA6: string
					tealA7: string
					tealA8: string
					tealA9: string
					tealA10: string
					tealA11: string
					tealA12: string
					cyanA1: string
					cyanA2: string
					cyanA3: string
					cyanA4: string
					cyanA5: string
					cyanA6: string
					cyanA7: string
					cyanA8: string
					cyanA9: string
					cyanA10: string
					cyanA11: string
					cyanA12: string
					mintA1: string
					mintA2: string
					mintA3: string
					mintA4: string
					mintA5: string
					mintA6: string
					mintA7: string
					mintA8: string
					mintA9: string
					mintA10: string
					mintA11: string
					mintA12: string
					skyA1: string
					skyA2: string
					skyA3: string
					skyA4: string
					skyA5: string
					skyA6: string
					skyA7: string
					skyA8: string
					skyA9: string
					skyA10: string
					skyA11: string
					skyA12: string
					blueA1: string
					blueA2: string
					blueA3: string
					blueA4: string
					blueA5: string
					blueA6: string
					blueA7: string
					blueA8: string
					blueA9: string
					blueA10: string
					blueA11: string
					blueA12: string
					indigoA1: string
					indigoA2: string
					indigoA3: string
					indigoA4: string
					indigoA5: string
					indigoA6: string
					indigoA7: string
					indigoA8: string
					indigoA9: string
					indigoA10: string
					indigoA11: string
					indigoA12: string
					violetA1: string
					violetA2: string
					violetA3: string
					violetA4: string
					violetA5: string
					violetA6: string
					violetA7: string
					violetA8: string
					violetA9: string
					violetA10: string
					violetA11: string
					violetA12: string
					purpleA1: string
					purpleA2: string
					purpleA3: string
					purpleA4: string
					purpleA5: string
					purpleA6: string
					purpleA7: string
					purpleA8: string
					purpleA9: string
					purpleA10: string
					purpleA11: string
					purpleA12: string
					plumA1: string
					plumA2: string
					plumA3: string
					plumA4: string
					plumA5: string
					plumA6: string
					plumA7: string
					plumA8: string
					plumA9: string
					plumA10: string
					plumA11: string
					plumA12: string
					pinkA1: string
					pinkA2: string
					pinkA3: string
					pinkA4: string
					pinkA5: string
					pinkA6: string
					pinkA7: string
					pinkA8: string
					pinkA9: string
					pinkA10: string
					pinkA11: string
					pinkA12: string
					crimsonA1: string
					crimsonA2: string
					crimsonA3: string
					crimsonA4: string
					crimsonA5: string
					crimsonA6: string
					crimsonA7: string
					crimsonA8: string
					crimsonA9: string
					crimsonA10: string
					crimsonA11: string
					crimsonA12: string
					redA1: string
					redA2: string
					redA3: string
					redA4: string
					redA5: string
					redA6: string
					redA7: string
					redA8: string
					redA9: string
					redA10: string
					redA11: string
					redA12: string
					tomatoA1: string
					tomatoA2: string
					tomatoA3: string
					tomatoA4: string
					tomatoA5: string
					tomatoA6: string
					tomatoA7: string
					tomatoA8: string
					tomatoA9: string
					tomatoA10: string
					tomatoA11: string
					tomatoA12: string
					sandA1: string
					sandA2: string
					sandA3: string
					sandA4: string
					sandA5: string
					sandA6: string
					sandA7: string
					sandA8: string
					sandA9: string
					sandA10: string
					sandA11: string
					sandA12: string
					oliveA1: string
					oliveA2: string
					oliveA3: string
					oliveA4: string
					oliveA5: string
					oliveA6: string
					oliveA7: string
					oliveA8: string
					oliveA9: string
					oliveA10: string
					oliveA11: string
					oliveA12: string
					sageA1: string
					sageA2: string
					sageA3: string
					sageA4: string
					sageA5: string
					sageA6: string
					sageA7: string
					sageA8: string
					sageA9: string
					sageA10: string
					sageA11: string
					sageA12: string
					slateA1: string
					slateA2: string
					slateA3: string
					slateA4: string
					slateA5: string
					slateA6: string
					slateA7: string
					slateA8: string
					slateA9: string
					slateA10: string
					slateA11: string
					slateA12: string
					mauveA1: string
					mauveA2: string
					mauveA3: string
					mauveA4: string
					mauveA5: string
					mauveA6: string
					mauveA7: string
					mauveA8: string
					mauveA9: string
					mauveA10: string
					mauveA11: string
					mauveA12: string
					grayA1: string
					grayA2: string
					grayA3: string
					grayA4: string
					grayA5: string
					grayA6: string
					grayA7: string
					grayA8: string
					grayA9: string
					grayA10: string
					grayA11: string
					grayA12: string
					gold1: string
					gold2: string
					gold3: string
					gold4: string
					gold5: string
					gold6: string
					gold7: string
					gold8: string
					gold9: string
					gold10: string
					gold11: string
					gold12: string
					bronze1: string
					bronze2: string
					bronze3: string
					bronze4: string
					bronze5: string
					bronze6: string
					bronze7: string
					bronze8: string
					bronze9: string
					bronze10: string
					bronze11: string
					bronze12: string
					brown1: string
					brown2: string
					brown3: string
					brown4: string
					brown5: string
					brown6: string
					brown7: string
					brown8: string
					brown9: string
					brown10: string
					brown11: string
					brown12: string
					orange1: string
					orange2: string
					orange3: string
					orange4: string
					orange5: string
					orange6: string
					orange7: string
					orange8: string
					orange9: string
					orange10: string
					orange11: string
					orange12: string
					amber1: string
					amber2: string
					amber3: string
					amber4: string
					amber5: string
					amber6: string
					amber7: string
					amber8: string
					amber9: string
					amber10: string
					amber11: string
					amber12: string
					yellow1: string
					yellow2: string
					yellow3: string
					yellow4: string
					yellow5: string
					yellow6: string
					yellow7: string
					yellow8: string
					yellow9: string
					yellow10: string
					yellow11: string
					yellow12: string
					lime1: string
					lime2: string
					lime3: string
					lime4: string
					lime5: string
					lime6: string
					lime7: string
					lime8: string
					lime9: string
					lime10: string
					lime11: string
					lime12: string
					grass1: string
					grass2: string
					grass3: string
					grass4: string
					grass5: string
					grass6: string
					grass7: string
					grass8: string
					grass9: string
					grass10: string
					grass11: string
					grass12: string
					green1: string
					green2: string
					green3: string
					green4: string
					green5: string
					green6: string
					green7: string
					green8: string
					green9: string
					green10: string
					green11: string
					green12: string
					teal1: string
					teal2: string
					teal3: string
					teal4: string
					teal5: string
					teal6: string
					teal7: string
					teal8: string
					teal9: string
					teal10: string
					teal11: string
					teal12: string
					cyan1: string
					cyan2: string
					cyan3: string
					cyan4: string
					cyan5: string
					cyan6: string
					cyan7: string
					cyan8: string
					cyan9: string
					cyan10: string
					cyan11: string
					cyan12: string
					mint1: string
					mint2: string
					mint3: string
					mint4: string
					mint5: string
					mint6: string
					mint7: string
					mint8: string
					mint9: string
					mint10: string
					mint11: string
					mint12: string
					sky1: string
					sky2: string
					sky3: string
					sky4: string
					sky5: string
					sky6: string
					sky7: string
					sky8: string
					sky9: string
					sky10: string
					sky11: string
					sky12: string
					blue1: string
					blue2: string
					blue3: string
					blue4: string
					blue5: string
					blue6: string
					blue7: string
					blue8: string
					blue9: string
					blue10: string
					blue11: string
					blue12: string
					indigo1: string
					indigo2: string
					indigo3: string
					indigo4: string
					indigo5: string
					indigo6: string
					indigo7: string
					indigo8: string
					indigo9: string
					indigo10: string
					indigo11: string
					indigo12: string
					violet1: string
					violet2: string
					violet3: string
					violet4: string
					violet5: string
					violet6: string
					violet7: string
					violet8: string
					violet9: string
					violet10: string
					violet11: string
					violet12: string
					purple1: string
					purple2: string
					purple3: string
					purple4: string
					purple5: string
					purple6: string
					purple7: string
					purple8: string
					purple9: string
					purple10: string
					purple11: string
					purple12: string
					plum1: string
					plum2: string
					plum3: string
					plum4: string
					plum5: string
					plum6: string
					plum7: string
					plum8: string
					plum9: string
					plum10: string
					plum11: string
					plum12: string
					pink1: string
					pink2: string
					pink3: string
					pink4: string
					pink5: string
					pink6: string
					pink7: string
					pink8: string
					pink9: string
					pink10: string
					pink11: string
					pink12: string
					crimson1: string
					crimson2: string
					crimson3: string
					crimson4: string
					crimson5: string
					crimson6: string
					crimson7: string
					crimson8: string
					crimson9: string
					crimson10: string
					crimson11: string
					crimson12: string
					red1: string
					red2: string
					red3: string
					red4: string
					red5: string
					red6: string
					red7: string
					red8: string
					red9: string
					red10: string
					red11: string
					red12: string
					tomato1: string
					tomato2: string
					tomato3: string
					tomato4: string
					tomato5: string
					tomato6: string
					tomato7: string
					tomato8: string
					tomato9: string
					tomato10: string
					tomato11: string
					tomato12: string
					sand1: string
					sand2: string
					sand3: string
					sand4: string
					sand5: string
					sand6: string
					sand7: string
					sand8: string
					sand9: string
					sand10: string
					sand11: string
					sand12: string
					olive1: string
					olive2: string
					olive3: string
					olive4: string
					olive5: string
					olive6: string
					olive7: string
					olive8: string
					olive9: string
					olive10: string
					olive11: string
					olive12: string
					sage1: string
					sage2: string
					sage3: string
					sage4: string
					sage5: string
					sage6: string
					sage7: string
					sage8: string
					sage9: string
					sage10: string
					sage11: string
					sage12: string
					slate1: string
					slate2: string
					slate3: string
					slate4: string
					slate5: string
					slate6: string
					slate7: string
					slate8: string
					slate9: string
					slate10: string
					slate11: string
					slate12: string
					mauve1: string
					mauve2: string
					mauve3: string
					mauve4: string
					mauve5: string
					mauve6: string
					mauve7: string
					mauve8: string
					mauve9: string
					mauve10: string
					mauve11: string
					mauve12: string
					gray1: string
					gray2: string
					gray3: string
					gray4: string
					gray5: string
					gray6: string
					gray7: string
					gray8: string
					gray9: string
					gray10: string
					gray11: string
					gray12: string
				}
				fonts: {
					untitled: string
					mono: string
				}
				space: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				sizes: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				fontSizes: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				radii: {
					1: string
					2: string
					3: string
					4: string
					round: string
					pill: string
				}
				zIndices: {
					1: string
					2: string
					3: string
					4: string
					max: string
				}
			},
			import('@stitches/react/types/config').DefaultThemeMap,
			{
				p: (value: Stitches.PropertyValue<'padding'>) => {
					padding: Stitches.PropertyValue<'padding'>
				}
				pt: (value: Stitches.PropertyValue<'paddingTop'>) => {
					paddingTop: Stitches.PropertyValue<'paddingTop'>
				}
				pr: (value: Stitches.PropertyValue<'paddingRight'>) => {
					paddingRight: Stitches.PropertyValue<'paddingRight'>
				}
				pb: (value: Stitches.PropertyValue<'paddingBottom'>) => {
					paddingBottom: Stitches.PropertyValue<'paddingBottom'>
				}
				pl: (value: Stitches.PropertyValue<'paddingLeft'>) => {
					paddingLeft: Stitches.PropertyValue<'paddingLeft'>
				}
				px: (value: Stitches.PropertyValue<'paddingLeft'>) => {
					paddingLeft: Stitches.PropertyValue<'paddingLeft'>
					paddingRight: Stitches.PropertyValue<'paddingLeft'>
				}
				py: (value: Stitches.PropertyValue<'paddingTop'>) => {
					paddingTop: Stitches.PropertyValue<'paddingTop'>
					paddingBottom: Stitches.PropertyValue<'paddingTop'>
				}
				m: (value: Stitches.PropertyValue<'margin'>) => {
					margin: Stitches.PropertyValue<'margin'>
				}
				mt: (value: Stitches.PropertyValue<'marginTop'>) => {
					marginTop: Stitches.PropertyValue<'marginTop'>
				}
				mr: (value: Stitches.PropertyValue<'marginRight'>) => {
					marginRight: Stitches.PropertyValue<'marginRight'>
				}
				mb: (value: Stitches.PropertyValue<'marginBottom'>) => {
					marginBottom: Stitches.PropertyValue<'marginBottom'>
				}
				ml: (value: Stitches.PropertyValue<'marginLeft'>) => {
					marginLeft: Stitches.PropertyValue<'marginLeft'>
				}
				mx: (value: Stitches.PropertyValue<'marginLeft'>) => {
					marginLeft: Stitches.PropertyValue<'marginLeft'>
					marginRight: Stitches.PropertyValue<'marginLeft'>
				}
				my: (value: Stitches.PropertyValue<'marginTop'>) => {
					marginTop: Stitches.PropertyValue<'marginTop'>
					marginBottom: Stitches.PropertyValue<'marginTop'>
				}
				ta: (value: Stitches.PropertyValue<'textAlign'>) => {
					textAlign: Stitches.PropertyValue<'textAlign'>
				}
				fd: (value: Stitches.PropertyValue<'flexDirection'>) => {
					flexDirection: Stitches.PropertyValue<'flexDirection'>
				}
				fw: (value: Stitches.PropertyValue<'flexWrap'>) => {
					flexWrap: Stitches.PropertyValue<'flexWrap'>
				}
				ai: (value: Stitches.PropertyValue<'alignItems'>) => {
					alignItems: Stitches.PropertyValue<'alignItems'>
				}
				ac: (value: Stitches.PropertyValue<'alignContent'>) => {
					alignContent: Stitches.PropertyValue<'alignContent'>
				}
				jc: (value: Stitches.PropertyValue<'justifyContent'>) => {
					justifyContent: Stitches.PropertyValue<'justifyContent'>
				}
				as: (value: Stitches.PropertyValue<'alignSelf'>) => {
					alignSelf: Stitches.PropertyValue<'alignSelf'>
				}
				fg: (value: Stitches.PropertyValue<'flexGrow'>) => {
					flexGrow: Stitches.PropertyValue<'flexGrow'>
				}
				fs: (value: Stitches.PropertyValue<'flexShrink'>) => {
					flexShrink: Stitches.PropertyValue<'flexShrink'>
				}
				fb: (value: Stitches.PropertyValue<'flexBasis'>) => {
					flexBasis: Stitches.PropertyValue<'flexBasis'>
				}
				bc: (value: Stitches.PropertyValue<'backgroundColor'>) => {
					backgroundColor: Stitches.PropertyValue<'backgroundColor'>
				}
				br: (value: Stitches.PropertyValue<'borderRadius'>) => {
					borderRadius: Stitches.PropertyValue<'borderRadius'>
				}
				btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => {
					borderTopRightRadius: Stitches.PropertyValue<'borderTopRightRadius'>
				}
				bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => {
					borderBottomRightRadius: Stitches.PropertyValue<'borderBottomRightRadius'>
				}
				bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => {
					borderBottomLeftRadius: Stitches.PropertyValue<'borderBottomLeftRadius'>
				}
				btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => {
					borderTopLeftRadius: Stitches.PropertyValue<'borderTopLeftRadius'>
				}
				bs: (value: Stitches.PropertyValue<'boxShadow'>) => {
					boxShadow: Stitches.PropertyValue<'boxShadow'>
				}
				lh: (value: Stitches.PropertyValue<'lineHeight'>) => {
					lineHeight: Stitches.PropertyValue<'lineHeight'>
				}
				ox: (value: Stitches.PropertyValue<'overflowX'>) => {
					overflowX: Stitches.PropertyValue<'overflowX'>
				}
				oy: (value: Stitches.PropertyValue<'overflowY'>) => {
					overflowY: Stitches.PropertyValue<'overflowY'>
				}
				pe: (value: Stitches.PropertyValue<'pointerEvents'>) => {
					pointerEvents: Stitches.PropertyValue<'pointerEvents'>
				}
				us: (value: Stitches.PropertyValue<'userSelect'>) => {
					WebkitUserSelect: Stitches.PropertyValue<'userSelect'>
					userSelect: Stitches.PropertyValue<'userSelect'>
				}
				userSelect: (value: Stitches.PropertyValue<'userSelect'>) => {
					WebkitUserSelect: Stitches.PropertyValue<'userSelect'>
					userSelect: Stitches.PropertyValue<'userSelect'>
				}
				size: (value: Stitches.PropertyValue<'width'>) => {
					width: Stitches.PropertyValue<'width'>
					height: Stitches.PropertyValue<'width'>
				}
				appearance: (value: Stitches.PropertyValue<'appearance'>) => {
					WebkitAppearance: Stitches.PropertyValue<'appearance'>
					appearance: Stitches.PropertyValue<'appearance'>
				}
				backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => {
					WebkitBackgroundClip: Stitches.PropertyValue<'backgroundClip'>
					backgroundClip: Stitches.PropertyValue<'backgroundClip'>
				}
			}
		>
	>,
	createTheme: <
		Argument0 extends
			| string
			| ({
					colors?:
						| {
								hiContrast?: string | number | boolean | undefined
								loContrast?: string | number | boolean | undefined
								canvas?: string | number | boolean | undefined
								panel?: string | number | boolean | undefined
								transparentPanel?: string | number | boolean | undefined
								shadowLight?: string | number | boolean | undefined
								shadowDark?: string | number | boolean | undefined
								blackA1?: string | number | boolean | undefined
								blackA2?: string | number | boolean | undefined
								blackA3?: string | number | boolean | undefined
								blackA4?: string | number | boolean | undefined
								blackA5?: string | number | boolean | undefined
								blackA6?: string | number | boolean | undefined
								blackA7?: string | number | boolean | undefined
								blackA8?: string | number | boolean | undefined
								blackA9?: string | number | boolean | undefined
								blackA10?: string | number | boolean | undefined
								blackA11?: string | number | boolean | undefined
								blackA12?: string | number | boolean | undefined
								whiteA1?: string | number | boolean | undefined
								whiteA2?: string | number | boolean | undefined
								whiteA3?: string | number | boolean | undefined
								whiteA4?: string | number | boolean | undefined
								whiteA5?: string | number | boolean | undefined
								whiteA6?: string | number | boolean | undefined
								whiteA7?: string | number | boolean | undefined
								whiteA8?: string | number | boolean | undefined
								whiteA9?: string | number | boolean | undefined
								whiteA10?: string | number | boolean | undefined
								whiteA11?: string | number | boolean | undefined
								whiteA12?: string | number | boolean | undefined
								goldA1?: string | number | boolean | undefined
								goldA2?: string | number | boolean | undefined
								goldA3?: string | number | boolean | undefined
								goldA4?: string | number | boolean | undefined
								goldA5?: string | number | boolean | undefined
								goldA6?: string | number | boolean | undefined
								goldA7?: string | number | boolean | undefined
								goldA8?: string | number | boolean | undefined
								goldA9?: string | number | boolean | undefined
								goldA10?: string | number | boolean | undefined
								goldA11?: string | number | boolean | undefined
								goldA12?: string | number | boolean | undefined
								bronzeA1?: string | number | boolean | undefined
								bronzeA2?: string | number | boolean | undefined
								bronzeA3?: string | number | boolean | undefined
								bronzeA4?: string | number | boolean | undefined
								bronzeA5?: string | number | boolean | undefined
								bronzeA6?: string | number | boolean | undefined
								bronzeA7?: string | number | boolean | undefined
								bronzeA8?: string | number | boolean | undefined
								bronzeA9?: string | number | boolean | undefined
								bronzeA10?: string | number | boolean | undefined
								bronzeA11?: string | number | boolean | undefined
								bronzeA12?: string | number | boolean | undefined
								brownA1?: string | number | boolean | undefined
								brownA2?: string | number | boolean | undefined
								brownA3?: string | number | boolean | undefined
								brownA4?: string | number | boolean | undefined
								brownA5?: string | number | boolean | undefined
								brownA6?: string | number | boolean | undefined
								brownA7?: string | number | boolean | undefined
								brownA8?: string | number | boolean | undefined
								brownA9?: string | number | boolean | undefined
								brownA10?: string | number | boolean | undefined
								brownA11?: string | number | boolean | undefined
								brownA12?: string | number | boolean | undefined
								orangeA1?: string | number | boolean | undefined
								orangeA2?: string | number | boolean | undefined
								orangeA3?: string | number | boolean | undefined
								orangeA4?: string | number | boolean | undefined
								orangeA5?: string | number | boolean | undefined
								orangeA6?: string | number | boolean | undefined
								orangeA7?: string | number | boolean | undefined
								orangeA8?: string | number | boolean | undefined
								orangeA9?: string | number | boolean | undefined
								orangeA10?: string | number | boolean | undefined
								orangeA11?: string | number | boolean | undefined
								orangeA12?: string | number | boolean | undefined
								amberA1?: string | number | boolean | undefined
								amberA2?: string | number | boolean | undefined
								amberA3?: string | number | boolean | undefined
								amberA4?: string | number | boolean | undefined
								amberA5?: string | number | boolean | undefined
								amberA6?: string | number | boolean | undefined
								amberA7?: string | number | boolean | undefined
								amberA8?: string | number | boolean | undefined
								amberA9?: string | number | boolean | undefined
								amberA10?: string | number | boolean | undefined
								amberA11?: string | number | boolean | undefined
								amberA12?: string | number | boolean | undefined
								yellowA1?: string | number | boolean | undefined
								yellowA2?: string | number | boolean | undefined
								yellowA3?: string | number | boolean | undefined
								yellowA4?: string | number | boolean | undefined
								yellowA5?: string | number | boolean | undefined
								yellowA6?: string | number | boolean | undefined
								yellowA7?: string | number | boolean | undefined
								yellowA8?: string | number | boolean | undefined
								yellowA9?: string | number | boolean | undefined
								yellowA10?: string | number | boolean | undefined
								yellowA11?: string | number | boolean | undefined
								yellowA12?: string | number | boolean | undefined
								limeA1?: string | number | boolean | undefined
								limeA2?: string | number | boolean | undefined
								limeA3?: string | number | boolean | undefined
								limeA4?: string | number | boolean | undefined
								limeA5?: string | number | boolean | undefined
								limeA6?: string | number | boolean | undefined
								limeA7?: string | number | boolean | undefined
								limeA8?: string | number | boolean | undefined
								limeA9?: string | number | boolean | undefined
								limeA10?: string | number | boolean | undefined
								limeA11?: string | number | boolean | undefined
								limeA12?: string | number | boolean | undefined
								grassA1?: string | number | boolean | undefined
								grassA2?: string | number | boolean | undefined
								grassA3?: string | number | boolean | undefined
								grassA4?: string | number | boolean | undefined
								grassA5?: string | number | boolean | undefined
								grassA6?: string | number | boolean | undefined
								grassA7?: string | number | boolean | undefined
								grassA8?: string | number | boolean | undefined
								grassA9?: string | number | boolean | undefined
								grassA10?: string | number | boolean | undefined
								grassA11?: string | number | boolean | undefined
								grassA12?: string | number | boolean | undefined
								greenA1?: string | number | boolean | undefined
								greenA2?: string | number | boolean | undefined
								greenA3?: string | number | boolean | undefined
								greenA4?: string | number | boolean | undefined
								greenA5?: string | number | boolean | undefined
								greenA6?: string | number | boolean | undefined
								greenA7?: string | number | boolean | undefined
								greenA8?: string | number | boolean | undefined
								greenA9?: string | number | boolean | undefined
								greenA10?: string | number | boolean | undefined
								greenA11?: string | number | boolean | undefined
								greenA12?: string | number | boolean | undefined
								tealA1?: string | number | boolean | undefined
								tealA2?: string | number | boolean | undefined
								tealA3?: string | number | boolean | undefined
								tealA4?: string | number | boolean | undefined
								tealA5?: string | number | boolean | undefined
								tealA6?: string | number | boolean | undefined
								tealA7?: string | number | boolean | undefined
								tealA8?: string | number | boolean | undefined
								tealA9?: string | number | boolean | undefined
								tealA10?: string | number | boolean | undefined
								tealA11?: string | number | boolean | undefined
								tealA12?: string | number | boolean | undefined
								cyanA1?: string | number | boolean | undefined
								cyanA2?: string | number | boolean | undefined
								cyanA3?: string | number | boolean | undefined
								cyanA4?: string | number | boolean | undefined
								cyanA5?: string | number | boolean | undefined
								cyanA6?: string | number | boolean | undefined
								cyanA7?: string | number | boolean | undefined
								cyanA8?: string | number | boolean | undefined
								cyanA9?: string | number | boolean | undefined
								cyanA10?: string | number | boolean | undefined
								cyanA11?: string | number | boolean | undefined
								cyanA12?: string | number | boolean | undefined
								mintA1?: string | number | boolean | undefined
								mintA2?: string | number | boolean | undefined
								mintA3?: string | number | boolean | undefined
								mintA4?: string | number | boolean | undefined
								mintA5?: string | number | boolean | undefined
								mintA6?: string | number | boolean | undefined
								mintA7?: string | number | boolean | undefined
								mintA8?: string | number | boolean | undefined
								mintA9?: string | number | boolean | undefined
								mintA10?: string | number | boolean | undefined
								mintA11?: string | number | boolean | undefined
								mintA12?: string | number | boolean | undefined
								skyA1?: string | number | boolean | undefined
								skyA2?: string | number | boolean | undefined
								skyA3?: string | number | boolean | undefined
								skyA4?: string | number | boolean | undefined
								skyA5?: string | number | boolean | undefined
								skyA6?: string | number | boolean | undefined
								skyA7?: string | number | boolean | undefined
								skyA8?: string | number | boolean | undefined
								skyA9?: string | number | boolean | undefined
								skyA10?: string | number | boolean | undefined
								skyA11?: string | number | boolean | undefined
								skyA12?: string | number | boolean | undefined
								blueA1?: string | number | boolean | undefined
								blueA2?: string | number | boolean | undefined
								blueA3?: string | number | boolean | undefined
								blueA4?: string | number | boolean | undefined
								blueA5?: string | number | boolean | undefined
								blueA6?: string | number | boolean | undefined
								blueA7?: string | number | boolean | undefined
								blueA8?: string | number | boolean | undefined
								blueA9?: string | number | boolean | undefined
								blueA10?: string | number | boolean | undefined
								blueA11?: string | number | boolean | undefined
								blueA12?: string | number | boolean | undefined
								indigoA1?: string | number | boolean | undefined
								indigoA2?: string | number | boolean | undefined
								indigoA3?: string | number | boolean | undefined
								indigoA4?: string | number | boolean | undefined
								indigoA5?: string | number | boolean | undefined
								indigoA6?: string | number | boolean | undefined
								indigoA7?: string | number | boolean | undefined
								indigoA8?: string | number | boolean | undefined
								indigoA9?: string | number | boolean | undefined
								indigoA10?: string | number | boolean | undefined
								indigoA11?: string | number | boolean | undefined
								indigoA12?: string | number | boolean | undefined
								violetA1?: string | number | boolean | undefined
								violetA2?: string | number | boolean | undefined
								violetA3?: string | number | boolean | undefined
								violetA4?: string | number | boolean | undefined
								violetA5?: string | number | boolean | undefined
								violetA6?: string | number | boolean | undefined
								violetA7?: string | number | boolean | undefined
								violetA8?: string | number | boolean | undefined
								violetA9?: string | number | boolean | undefined
								violetA10?: string | number | boolean | undefined
								violetA11?: string | number | boolean | undefined
								violetA12?: string | number | boolean | undefined
								purpleA1?: string | number | boolean | undefined
								purpleA2?: string | number | boolean | undefined
								purpleA3?: string | number | boolean | undefined
								purpleA4?: string | number | boolean | undefined
								purpleA5?: string | number | boolean | undefined
								purpleA6?: string | number | boolean | undefined
								purpleA7?: string | number | boolean | undefined
								purpleA8?: string | number | boolean | undefined
								purpleA9?: string | number | boolean | undefined
								purpleA10?: string | number | boolean | undefined
								purpleA11?: string | number | boolean | undefined
								purpleA12?: string | number | boolean | undefined
								plumA1?: string | number | boolean | undefined
								plumA2?: string | number | boolean | undefined
								plumA3?: string | number | boolean | undefined
								plumA4?: string | number | boolean | undefined
								plumA5?: string | number | boolean | undefined
								plumA6?: string | number | boolean | undefined
								plumA7?: string | number | boolean | undefined
								plumA8?: string | number | boolean | undefined
								plumA9?: string | number | boolean | undefined
								plumA10?: string | number | boolean | undefined
								plumA11?: string | number | boolean | undefined
								plumA12?: string | number | boolean | undefined
								pinkA1?: string | number | boolean | undefined
								pinkA2?: string | number | boolean | undefined
								pinkA3?: string | number | boolean | undefined
								pinkA4?: string | number | boolean | undefined
								pinkA5?: string | number | boolean | undefined
								pinkA6?: string | number | boolean | undefined
								pinkA7?: string | number | boolean | undefined
								pinkA8?: string | number | boolean | undefined
								pinkA9?: string | number | boolean | undefined
								pinkA10?: string | number | boolean | undefined
								pinkA11?: string | number | boolean | undefined
								pinkA12?: string | number | boolean | undefined
								crimsonA1?: string | number | boolean | undefined
								crimsonA2?: string | number | boolean | undefined
								crimsonA3?: string | number | boolean | undefined
								crimsonA4?: string | number | boolean | undefined
								crimsonA5?: string | number | boolean | undefined
								crimsonA6?: string | number | boolean | undefined
								crimsonA7?: string | number | boolean | undefined
								crimsonA8?: string | number | boolean | undefined
								crimsonA9?: string | number | boolean | undefined
								crimsonA10?: string | number | boolean | undefined
								crimsonA11?: string | number | boolean | undefined
								crimsonA12?: string | number | boolean | undefined
								redA1?: string | number | boolean | undefined
								redA2?: string | number | boolean | undefined
								redA3?: string | number | boolean | undefined
								redA4?: string | number | boolean | undefined
								redA5?: string | number | boolean | undefined
								redA6?: string | number | boolean | undefined
								redA7?: string | number | boolean | undefined
								redA8?: string | number | boolean | undefined
								redA9?: string | number | boolean | undefined
								redA10?: string | number | boolean | undefined
								redA11?: string | number | boolean | undefined
								redA12?: string | number | boolean | undefined
								tomatoA1?: string | number | boolean | undefined
								tomatoA2?: string | number | boolean | undefined
								tomatoA3?: string | number | boolean | undefined
								tomatoA4?: string | number | boolean | undefined
								tomatoA5?: string | number | boolean | undefined
								tomatoA6?: string | number | boolean | undefined
								tomatoA7?: string | number | boolean | undefined
								tomatoA8?: string | number | boolean | undefined
								tomatoA9?: string | number | boolean | undefined
								tomatoA10?: string | number | boolean | undefined
								tomatoA11?: string | number | boolean | undefined
								tomatoA12?: string | number | boolean | undefined
								sandA1?: string | number | boolean | undefined
								sandA2?: string | number | boolean | undefined
								sandA3?: string | number | boolean | undefined
								sandA4?: string | number | boolean | undefined
								sandA5?: string | number | boolean | undefined
								sandA6?: string | number | boolean | undefined
								sandA7?: string | number | boolean | undefined
								sandA8?: string | number | boolean | undefined
								sandA9?: string | number | boolean | undefined
								sandA10?: string | number | boolean | undefined
								sandA11?: string | number | boolean | undefined
								sandA12?: string | number | boolean | undefined
								oliveA1?: string | number | boolean | undefined
								oliveA2?: string | number | boolean | undefined
								oliveA3?: string | number | boolean | undefined
								oliveA4?: string | number | boolean | undefined
								oliveA5?: string | number | boolean | undefined
								oliveA6?: string | number | boolean | undefined
								oliveA7?: string | number | boolean | undefined
								oliveA8?: string | number | boolean | undefined
								oliveA9?: string | number | boolean | undefined
								oliveA10?: string | number | boolean | undefined
								oliveA11?: string | number | boolean | undefined
								oliveA12?: string | number | boolean | undefined
								sageA1?: string | number | boolean | undefined
								sageA2?: string | number | boolean | undefined
								sageA3?: string | number | boolean | undefined
								sageA4?: string | number | boolean | undefined
								sageA5?: string | number | boolean | undefined
								sageA6?: string | number | boolean | undefined
								sageA7?: string | number | boolean | undefined
								sageA8?: string | number | boolean | undefined
								sageA9?: string | number | boolean | undefined
								sageA10?: string | number | boolean | undefined
								sageA11?: string | number | boolean | undefined
								sageA12?: string | number | boolean | undefined
								slateA1?: string | number | boolean | undefined
								slateA2?: string | number | boolean | undefined
								slateA3?: string | number | boolean | undefined
								slateA4?: string | number | boolean | undefined
								slateA5?: string | number | boolean | undefined
								slateA6?: string | number | boolean | undefined
								slateA7?: string | number | boolean | undefined
								slateA8?: string | number | boolean | undefined
								slateA9?: string | number | boolean | undefined
								slateA10?: string | number | boolean | undefined
								slateA11?: string | number | boolean | undefined
								slateA12?: string | number | boolean | undefined
								mauveA1?: string | number | boolean | undefined
								mauveA2?: string | number | boolean | undefined
								mauveA3?: string | number | boolean | undefined
								mauveA4?: string | number | boolean | undefined
								mauveA5?: string | number | boolean | undefined
								mauveA6?: string | number | boolean | undefined
								mauveA7?: string | number | boolean | undefined
								mauveA8?: string | number | boolean | undefined
								mauveA9?: string | number | boolean | undefined
								mauveA10?: string | number | boolean | undefined
								mauveA11?: string | number | boolean | undefined
								mauveA12?: string | number | boolean | undefined
								grayA1?: string | number | boolean | undefined
								grayA2?: string | number | boolean | undefined
								grayA3?: string | number | boolean | undefined
								grayA4?: string | number | boolean | undefined
								grayA5?: string | number | boolean | undefined
								grayA6?: string | number | boolean | undefined
								grayA7?: string | number | boolean | undefined
								grayA8?: string | number | boolean | undefined
								grayA9?: string | number | boolean | undefined
								grayA10?: string | number | boolean | undefined
								grayA11?: string | number | boolean | undefined
								grayA12?: string | number | boolean | undefined
								gold1?: string | number | boolean | undefined
								gold2?: string | number | boolean | undefined
								gold3?: string | number | boolean | undefined
								gold4?: string | number | boolean | undefined
								gold5?: string | number | boolean | undefined
								gold6?: string | number | boolean | undefined
								gold7?: string | number | boolean | undefined
								gold8?: string | number | boolean | undefined
								gold9?: string | number | boolean | undefined
								gold10?: string | number | boolean | undefined
								gold11?: string | number | boolean | undefined
								gold12?: string | number | boolean | undefined
								bronze1?: string | number | boolean | undefined
								bronze2?: string | number | boolean | undefined
								bronze3?: string | number | boolean | undefined
								bronze4?: string | number | boolean | undefined
								bronze5?: string | number | boolean | undefined
								bronze6?: string | number | boolean | undefined
								bronze7?: string | number | boolean | undefined
								bronze8?: string | number | boolean | undefined
								bronze9?: string | number | boolean | undefined
								bronze10?: string | number | boolean | undefined
								bronze11?: string | number | boolean | undefined
								bronze12?: string | number | boolean | undefined
								brown1?: string | number | boolean | undefined
								brown2?: string | number | boolean | undefined
								brown3?: string | number | boolean | undefined
								brown4?: string | number | boolean | undefined
								brown5?: string | number | boolean | undefined
								brown6?: string | number | boolean | undefined
								brown7?: string | number | boolean | undefined
								brown8?: string | number | boolean | undefined
								brown9?: string | number | boolean | undefined
								brown10?: string | number | boolean | undefined
								brown11?: string | number | boolean | undefined
								brown12?: string | number | boolean | undefined
								orange1?: string | number | boolean | undefined
								orange2?: string | number | boolean | undefined
								orange3?: string | number | boolean | undefined
								orange4?: string | number | boolean | undefined
								orange5?: string | number | boolean | undefined
								orange6?: string | number | boolean | undefined
								orange7?: string | number | boolean | undefined
								orange8?: string | number | boolean | undefined
								orange9?: string | number | boolean | undefined
								orange10?: string | number | boolean | undefined
								orange11?: string | number | boolean | undefined
								orange12?: string | number | boolean | undefined
								amber1?: string | number | boolean | undefined
								amber2?: string | number | boolean | undefined
								amber3?: string | number | boolean | undefined
								amber4?: string | number | boolean | undefined
								amber5?: string | number | boolean | undefined
								amber6?: string | number | boolean | undefined
								amber7?: string | number | boolean | undefined
								amber8?: string | number | boolean | undefined
								amber9?: string | number | boolean | undefined
								amber10?: string | number | boolean | undefined
								amber11?: string | number | boolean | undefined
								amber12?: string | number | boolean | undefined
								yellow1?: string | number | boolean | undefined
								yellow2?: string | number | boolean | undefined
								yellow3?: string | number | boolean | undefined
								yellow4?: string | number | boolean | undefined
								yellow5?: string | number | boolean | undefined
								yellow6?: string | number | boolean | undefined
								yellow7?: string | number | boolean | undefined
								yellow8?: string | number | boolean | undefined
								yellow9?: string | number | boolean | undefined
								yellow10?: string | number | boolean | undefined
								yellow11?: string | number | boolean | undefined
								yellow12?: string | number | boolean | undefined
								lime1?: string | number | boolean | undefined
								lime2?: string | number | boolean | undefined
								lime3?: string | number | boolean | undefined
								lime4?: string | number | boolean | undefined
								lime5?: string | number | boolean | undefined
								lime6?: string | number | boolean | undefined
								lime7?: string | number | boolean | undefined
								lime8?: string | number | boolean | undefined
								lime9?: string | number | boolean | undefined
								lime10?: string | number | boolean | undefined
								lime11?: string | number | boolean | undefined
								lime12?: string | number | boolean | undefined
								grass1?: string | number | boolean | undefined
								grass2?: string | number | boolean | undefined
								grass3?: string | number | boolean | undefined
								grass4?: string | number | boolean | undefined
								grass5?: string | number | boolean | undefined
								grass6?: string | number | boolean | undefined
								grass7?: string | number | boolean | undefined
								grass8?: string | number | boolean | undefined
								grass9?: string | number | boolean | undefined
								grass10?: string | number | boolean | undefined
								grass11?: string | number | boolean | undefined
								grass12?: string | number | boolean | undefined
								green1?: string | number | boolean | undefined
								green2?: string | number | boolean | undefined
								green3?: string | number | boolean | undefined
								green4?: string | number | boolean | undefined
								green5?: string | number | boolean | undefined
								green6?: string | number | boolean | undefined
								green7?: string | number | boolean | undefined
								green8?: string | number | boolean | undefined
								green9?: string | number | boolean | undefined
								green10?: string | number | boolean | undefined
								green11?: string | number | boolean | undefined
								green12?: string | number | boolean | undefined
								teal1?: string | number | boolean | undefined
								teal2?: string | number | boolean | undefined
								teal3?: string | number | boolean | undefined
								teal4?: string | number | boolean | undefined
								teal5?: string | number | boolean | undefined
								teal6?: string | number | boolean | undefined
								teal7?: string | number | boolean | undefined
								teal8?: string | number | boolean | undefined
								teal9?: string | number | boolean | undefined
								teal10?: string | number | boolean | undefined
								teal11?: string | number | boolean | undefined
								teal12?: string | number | boolean | undefined
								cyan1?: string | number | boolean | undefined
								cyan2?: string | number | boolean | undefined
								cyan3?: string | number | boolean | undefined
								cyan4?: string | number | boolean | undefined
								cyan5?: string | number | boolean | undefined
								cyan6?: string | number | boolean | undefined
								cyan7?: string | number | boolean | undefined
								cyan8?: string | number | boolean | undefined
								cyan9?: string | number | boolean | undefined
								cyan10?: string | number | boolean | undefined
								cyan11?: string | number | boolean | undefined
								cyan12?: string | number | boolean | undefined
								mint1?: string | number | boolean | undefined
								mint2?: string | number | boolean | undefined
								mint3?: string | number | boolean | undefined
								mint4?: string | number | boolean | undefined
								mint5?: string | number | boolean | undefined
								mint6?: string | number | boolean | undefined
								mint7?: string | number | boolean | undefined
								mint8?: string | number | boolean | undefined
								mint9?: string | number | boolean | undefined
								mint10?: string | number | boolean | undefined
								mint11?: string | number | boolean | undefined
								mint12?: string | number | boolean | undefined
								sky1?: string | number | boolean | undefined
								sky2?: string | number | boolean | undefined
								sky3?: string | number | boolean | undefined
								sky4?: string | number | boolean | undefined
								sky5?: string | number | boolean | undefined
								sky6?: string | number | boolean | undefined
								sky7?: string | number | boolean | undefined
								sky8?: string | number | boolean | undefined
								sky9?: string | number | boolean | undefined
								sky10?: string | number | boolean | undefined
								sky11?: string | number | boolean | undefined
								sky12?: string | number | boolean | undefined
								blue1?: string | number | boolean | undefined
								blue2?: string | number | boolean | undefined
								blue3?: string | number | boolean | undefined
								blue4?: string | number | boolean | undefined
								blue5?: string | number | boolean | undefined
								blue6?: string | number | boolean | undefined
								blue7?: string | number | boolean | undefined
								blue8?: string | number | boolean | undefined
								blue9?: string | number | boolean | undefined
								blue10?: string | number | boolean | undefined
								blue11?: string | number | boolean | undefined
								blue12?: string | number | boolean | undefined
								indigo1?: string | number | boolean | undefined
								indigo2?: string | number | boolean | undefined
								indigo3?: string | number | boolean | undefined
								indigo4?: string | number | boolean | undefined
								indigo5?: string | number | boolean | undefined
								indigo6?: string | number | boolean | undefined
								indigo7?: string | number | boolean | undefined
								indigo8?: string | number | boolean | undefined
								indigo9?: string | number | boolean | undefined
								indigo10?: string | number | boolean | undefined
								indigo11?: string | number | boolean | undefined
								indigo12?: string | number | boolean | undefined
								violet1?: string | number | boolean | undefined
								violet2?: string | number | boolean | undefined
								violet3?: string | number | boolean | undefined
								violet4?: string | number | boolean | undefined
								violet5?: string | number | boolean | undefined
								violet6?: string | number | boolean | undefined
								violet7?: string | number | boolean | undefined
								violet8?: string | number | boolean | undefined
								violet9?: string | number | boolean | undefined
								violet10?: string | number | boolean | undefined
								violet11?: string | number | boolean | undefined
								violet12?: string | number | boolean | undefined
								purple1?: string | number | boolean | undefined
								purple2?: string | number | boolean | undefined
								purple3?: string | number | boolean | undefined
								purple4?: string | number | boolean | undefined
								purple5?: string | number | boolean | undefined
								purple6?: string | number | boolean | undefined
								purple7?: string | number | boolean | undefined
								purple8?: string | number | boolean | undefined
								purple9?: string | number | boolean | undefined
								purple10?: string | number | boolean | undefined
								purple11?: string | number | boolean | undefined
								purple12?: string | number | boolean | undefined
								plum1?: string | number | boolean | undefined
								plum2?: string | number | boolean | undefined
								plum3?: string | number | boolean | undefined
								plum4?: string | number | boolean | undefined
								plum5?: string | number | boolean | undefined
								plum6?: string | number | boolean | undefined
								plum7?: string | number | boolean | undefined
								plum8?: string | number | boolean | undefined
								plum9?: string | number | boolean | undefined
								plum10?: string | number | boolean | undefined
								plum11?: string | number | boolean | undefined
								plum12?: string | number | boolean | undefined
								pink1?: string | number | boolean | undefined
								pink2?: string | number | boolean | undefined
								pink3?: string | number | boolean | undefined
								pink4?: string | number | boolean | undefined
								pink5?: string | number | boolean | undefined
								pink6?: string | number | boolean | undefined
								pink7?: string | number | boolean | undefined
								pink8?: string | number | boolean | undefined
								pink9?: string | number | boolean | undefined
								pink10?: string | number | boolean | undefined
								pink11?: string | number | boolean | undefined
								pink12?: string | number | boolean | undefined
								crimson1?: string | number | boolean | undefined
								crimson2?: string | number | boolean | undefined
								crimson3?: string | number | boolean | undefined
								crimson4?: string | number | boolean | undefined
								crimson5?: string | number | boolean | undefined
								crimson6?: string | number | boolean | undefined
								crimson7?: string | number | boolean | undefined
								crimson8?: string | number | boolean | undefined
								crimson9?: string | number | boolean | undefined
								crimson10?: string | number | boolean | undefined
								crimson11?: string | number | boolean | undefined
								crimson12?: string | number | boolean | undefined
								red1?: string | number | boolean | undefined
								red2?: string | number | boolean | undefined
								red3?: string | number | boolean | undefined
								red4?: string | number | boolean | undefined
								red5?: string | number | boolean | undefined
								red6?: string | number | boolean | undefined
								red7?: string | number | boolean | undefined
								red8?: string | number | boolean | undefined
								red9?: string | number | boolean | undefined
								red10?: string | number | boolean | undefined
								red11?: string | number | boolean | undefined
								red12?: string | number | boolean | undefined
								tomato1?: string | number | boolean | undefined
								tomato2?: string | number | boolean | undefined
								tomato3?: string | number | boolean | undefined
								tomato4?: string | number | boolean | undefined
								tomato5?: string | number | boolean | undefined
								tomato6?: string | number | boolean | undefined
								tomato7?: string | number | boolean | undefined
								tomato8?: string | number | boolean | undefined
								tomato9?: string | number | boolean | undefined
								tomato10?: string | number | boolean | undefined
								tomato11?: string | number | boolean | undefined
								tomato12?: string | number | boolean | undefined
								sand1?: string | number | boolean | undefined
								sand2?: string | number | boolean | undefined
								sand3?: string | number | boolean | undefined
								sand4?: string | number | boolean | undefined
								sand5?: string | number | boolean | undefined
								sand6?: string | number | boolean | undefined
								sand7?: string | number | boolean | undefined
								sand8?: string | number | boolean | undefined
								sand9?: string | number | boolean | undefined
								sand10?: string | number | boolean | undefined
								sand11?: string | number | boolean | undefined
								sand12?: string | number | boolean | undefined
								olive1?: string | number | boolean | undefined
								olive2?: string | number | boolean | undefined
								olive3?: string | number | boolean | undefined
								olive4?: string | number | boolean | undefined
								olive5?: string | number | boolean | undefined
								olive6?: string | number | boolean | undefined
								olive7?: string | number | boolean | undefined
								olive8?: string | number | boolean | undefined
								olive9?: string | number | boolean | undefined
								olive10?: string | number | boolean | undefined
								olive11?: string | number | boolean | undefined
								olive12?: string | number | boolean | undefined
								sage1?: string | number | boolean | undefined
								sage2?: string | number | boolean | undefined
								sage3?: string | number | boolean | undefined
								sage4?: string | number | boolean | undefined
								sage5?: string | number | boolean | undefined
								sage6?: string | number | boolean | undefined
								sage7?: string | number | boolean | undefined
								sage8?: string | number | boolean | undefined
								sage9?: string | number | boolean | undefined
								sage10?: string | number | boolean | undefined
								sage11?: string | number | boolean | undefined
								sage12?: string | number | boolean | undefined
								slate1?: string | number | boolean | undefined
								slate2?: string | number | boolean | undefined
								slate3?: string | number | boolean | undefined
								slate4?: string | number | boolean | undefined
								slate5?: string | number | boolean | undefined
								slate6?: string | number | boolean | undefined
								slate7?: string | number | boolean | undefined
								slate8?: string | number | boolean | undefined
								slate9?: string | number | boolean | undefined
								slate10?: string | number | boolean | undefined
								slate11?: string | number | boolean | undefined
								slate12?: string | number | boolean | undefined
								mauve1?: string | number | boolean | undefined
								mauve2?: string | number | boolean | undefined
								mauve3?: string | number | boolean | undefined
								mauve4?: string | number | boolean | undefined
								mauve5?: string | number | boolean | undefined
								mauve6?: string | number | boolean | undefined
								mauve7?: string | number | boolean | undefined
								mauve8?: string | number | boolean | undefined
								mauve9?: string | number | boolean | undefined
								mauve10?: string | number | boolean | undefined
								mauve11?: string | number | boolean | undefined
								mauve12?: string | number | boolean | undefined
								gray1?: string | number | boolean | undefined
								gray2?: string | number | boolean | undefined
								gray3?: string | number | boolean | undefined
								gray4?: string | number | boolean | undefined
								gray5?: string | number | boolean | undefined
								gray6?: string | number | boolean | undefined
								gray7?: string | number | boolean | undefined
								gray8?: string | number | boolean | undefined
								gray9?: string | number | boolean | undefined
								gray10?: string | number | boolean | undefined
								gray11?: string | number | boolean | undefined
								gray12?: string | number | boolean | undefined
						  }
						| undefined
					fonts?:
						| {
								untitled?: string | number | boolean | undefined
								mono?: string | number | boolean | undefined
						  }
						| undefined
					space?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								5?: string | number | boolean | undefined
								6?: string | number | boolean | undefined
								7?: string | number | boolean | undefined
								8?: string | number | boolean | undefined
								9?: string | number | boolean | undefined
						  }
						| undefined
					sizes?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								5?: string | number | boolean | undefined
								6?: string | number | boolean | undefined
								7?: string | number | boolean | undefined
								8?: string | number | boolean | undefined
								9?: string | number | boolean | undefined
						  }
						| undefined
					fontSizes?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								5?: string | number | boolean | undefined
								6?: string | number | boolean | undefined
								7?: string | number | boolean | undefined
								8?: string | number | boolean | undefined
								9?: string | number | boolean | undefined
						  }
						| undefined
					radii?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								round?: string | number | boolean | undefined
								pill?: string | number | boolean | undefined
						  }
						| undefined
					zIndices?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								max?: string | number | boolean | undefined
						  }
						| undefined
			  } & {
					[x: string]: {
						[x: string]: string | number | boolean
						[x: number]: string | number | boolean
					}
			  }),
		Argument1 extends
			| string
			| ({
					colors?:
						| {
								hiContrast?: string | number | boolean | undefined
								loContrast?: string | number | boolean | undefined
								canvas?: string | number | boolean | undefined
								panel?: string | number | boolean | undefined
								transparentPanel?: string | number | boolean | undefined
								shadowLight?: string | number | boolean | undefined
								shadowDark?: string | number | boolean | undefined
								blackA1?: string | number | boolean | undefined
								blackA2?: string | number | boolean | undefined
								blackA3?: string | number | boolean | undefined
								blackA4?: string | number | boolean | undefined
								blackA5?: string | number | boolean | undefined
								blackA6?: string | number | boolean | undefined
								blackA7?: string | number | boolean | undefined
								blackA8?: string | number | boolean | undefined
								blackA9?: string | number | boolean | undefined
								blackA10?: string | number | boolean | undefined
								blackA11?: string | number | boolean | undefined
								blackA12?: string | number | boolean | undefined
								whiteA1?: string | number | boolean | undefined
								whiteA2?: string | number | boolean | undefined
								whiteA3?: string | number | boolean | undefined
								whiteA4?: string | number | boolean | undefined
								whiteA5?: string | number | boolean | undefined
								whiteA6?: string | number | boolean | undefined
								whiteA7?: string | number | boolean | undefined
								whiteA8?: string | number | boolean | undefined
								whiteA9?: string | number | boolean | undefined
								whiteA10?: string | number | boolean | undefined
								whiteA11?: string | number | boolean | undefined
								whiteA12?: string | number | boolean | undefined
								goldA1?: string | number | boolean | undefined
								goldA2?: string | number | boolean | undefined
								goldA3?: string | number | boolean | undefined
								goldA4?: string | number | boolean | undefined
								goldA5?: string | number | boolean | undefined
								goldA6?: string | number | boolean | undefined
								goldA7?: string | number | boolean | undefined
								goldA8?: string | number | boolean | undefined
								goldA9?: string | number | boolean | undefined
								goldA10?: string | number | boolean | undefined
								goldA11?: string | number | boolean | undefined
								goldA12?: string | number | boolean | undefined
								bronzeA1?: string | number | boolean | undefined
								bronzeA2?: string | number | boolean | undefined
								bronzeA3?: string | number | boolean | undefined
								bronzeA4?: string | number | boolean | undefined
								bronzeA5?: string | number | boolean | undefined
								bronzeA6?: string | number | boolean | undefined
								bronzeA7?: string | number | boolean | undefined
								bronzeA8?: string | number | boolean | undefined
								bronzeA9?: string | number | boolean | undefined
								bronzeA10?: string | number | boolean | undefined
								bronzeA11?: string | number | boolean | undefined
								bronzeA12?: string | number | boolean | undefined
								brownA1?: string | number | boolean | undefined
								brownA2?: string | number | boolean | undefined
								brownA3?: string | number | boolean | undefined
								brownA4?: string | number | boolean | undefined
								brownA5?: string | number | boolean | undefined
								brownA6?: string | number | boolean | undefined
								brownA7?: string | number | boolean | undefined
								brownA8?: string | number | boolean | undefined
								brownA9?: string | number | boolean | undefined
								brownA10?: string | number | boolean | undefined
								brownA11?: string | number | boolean | undefined
								brownA12?: string | number | boolean | undefined
								orangeA1?: string | number | boolean | undefined
								orangeA2?: string | number | boolean | undefined
								orangeA3?: string | number | boolean | undefined
								orangeA4?: string | number | boolean | undefined
								orangeA5?: string | number | boolean | undefined
								orangeA6?: string | number | boolean | undefined
								orangeA7?: string | number | boolean | undefined
								orangeA8?: string | number | boolean | undefined
								orangeA9?: string | number | boolean | undefined
								orangeA10?: string | number | boolean | undefined
								orangeA11?: string | number | boolean | undefined
								orangeA12?: string | number | boolean | undefined
								amberA1?: string | number | boolean | undefined
								amberA2?: string | number | boolean | undefined
								amberA3?: string | number | boolean | undefined
								amberA4?: string | number | boolean | undefined
								amberA5?: string | number | boolean | undefined
								amberA6?: string | number | boolean | undefined
								amberA7?: string | number | boolean | undefined
								amberA8?: string | number | boolean | undefined
								amberA9?: string | number | boolean | undefined
								amberA10?: string | number | boolean | undefined
								amberA11?: string | number | boolean | undefined
								amberA12?: string | number | boolean | undefined
								yellowA1?: string | number | boolean | undefined
								yellowA2?: string | number | boolean | undefined
								yellowA3?: string | number | boolean | undefined
								yellowA4?: string | number | boolean | undefined
								yellowA5?: string | number | boolean | undefined
								yellowA6?: string | number | boolean | undefined
								yellowA7?: string | number | boolean | undefined
								yellowA8?: string | number | boolean | undefined
								yellowA9?: string | number | boolean | undefined
								yellowA10?: string | number | boolean | undefined
								yellowA11?: string | number | boolean | undefined
								yellowA12?: string | number | boolean | undefined
								limeA1?: string | number | boolean | undefined
								limeA2?: string | number | boolean | undefined
								limeA3?: string | number | boolean | undefined
								limeA4?: string | number | boolean | undefined
								limeA5?: string | number | boolean | undefined
								limeA6?: string | number | boolean | undefined
								limeA7?: string | number | boolean | undefined
								limeA8?: string | number | boolean | undefined
								limeA9?: string | number | boolean | undefined
								limeA10?: string | number | boolean | undefined
								limeA11?: string | number | boolean | undefined
								limeA12?: string | number | boolean | undefined
								grassA1?: string | number | boolean | undefined
								grassA2?: string | number | boolean | undefined
								grassA3?: string | number | boolean | undefined
								grassA4?: string | number | boolean | undefined
								grassA5?: string | number | boolean | undefined
								grassA6?: string | number | boolean | undefined
								grassA7?: string | number | boolean | undefined
								grassA8?: string | number | boolean | undefined
								grassA9?: string | number | boolean | undefined
								grassA10?: string | number | boolean | undefined
								grassA11?: string | number | boolean | undefined
								grassA12?: string | number | boolean | undefined
								greenA1?: string | number | boolean | undefined
								greenA2?: string | number | boolean | undefined
								greenA3?: string | number | boolean | undefined
								greenA4?: string | number | boolean | undefined
								greenA5?: string | number | boolean | undefined
								greenA6?: string | number | boolean | undefined
								greenA7?: string | number | boolean | undefined
								greenA8?: string | number | boolean | undefined
								greenA9?: string | number | boolean | undefined
								greenA10?: string | number | boolean | undefined
								greenA11?: string | number | boolean | undefined
								greenA12?: string | number | boolean | undefined
								tealA1?: string | number | boolean | undefined
								tealA2?: string | number | boolean | undefined
								tealA3?: string | number | boolean | undefined
								tealA4?: string | number | boolean | undefined
								tealA5?: string | number | boolean | undefined
								tealA6?: string | number | boolean | undefined
								tealA7?: string | number | boolean | undefined
								tealA8?: string | number | boolean | undefined
								tealA9?: string | number | boolean | undefined
								tealA10?: string | number | boolean | undefined
								tealA11?: string | number | boolean | undefined
								tealA12?: string | number | boolean | undefined
								cyanA1?: string | number | boolean | undefined
								cyanA2?: string | number | boolean | undefined
								cyanA3?: string | number | boolean | undefined
								cyanA4?: string | number | boolean | undefined
								cyanA5?: string | number | boolean | undefined
								cyanA6?: string | number | boolean | undefined
								cyanA7?: string | number | boolean | undefined
								cyanA8?: string | number | boolean | undefined
								cyanA9?: string | number | boolean | undefined
								cyanA10?: string | number | boolean | undefined
								cyanA11?: string | number | boolean | undefined
								cyanA12?: string | number | boolean | undefined
								mintA1?: string | number | boolean | undefined
								mintA2?: string | number | boolean | undefined
								mintA3?: string | number | boolean | undefined
								mintA4?: string | number | boolean | undefined
								mintA5?: string | number | boolean | undefined
								mintA6?: string | number | boolean | undefined
								mintA7?: string | number | boolean | undefined
								mintA8?: string | number | boolean | undefined
								mintA9?: string | number | boolean | undefined
								mintA10?: string | number | boolean | undefined
								mintA11?: string | number | boolean | undefined
								mintA12?: string | number | boolean | undefined
								skyA1?: string | number | boolean | undefined
								skyA2?: string | number | boolean | undefined
								skyA3?: string | number | boolean | undefined
								skyA4?: string | number | boolean | undefined
								skyA5?: string | number | boolean | undefined
								skyA6?: string | number | boolean | undefined
								skyA7?: string | number | boolean | undefined
								skyA8?: string | number | boolean | undefined
								skyA9?: string | number | boolean | undefined
								skyA10?: string | number | boolean | undefined
								skyA11?: string | number | boolean | undefined
								skyA12?: string | number | boolean | undefined
								blueA1?: string | number | boolean | undefined
								blueA2?: string | number | boolean | undefined
								blueA3?: string | number | boolean | undefined
								blueA4?: string | number | boolean | undefined
								blueA5?: string | number | boolean | undefined
								blueA6?: string | number | boolean | undefined
								blueA7?: string | number | boolean | undefined
								blueA8?: string | number | boolean | undefined
								blueA9?: string | number | boolean | undefined
								blueA10?: string | number | boolean | undefined
								blueA11?: string | number | boolean | undefined
								blueA12?: string | number | boolean | undefined
								indigoA1?: string | number | boolean | undefined
								indigoA2?: string | number | boolean | undefined
								indigoA3?: string | number | boolean | undefined
								indigoA4?: string | number | boolean | undefined
								indigoA5?: string | number | boolean | undefined
								indigoA6?: string | number | boolean | undefined
								indigoA7?: string | number | boolean | undefined
								indigoA8?: string | number | boolean | undefined
								indigoA9?: string | number | boolean | undefined
								indigoA10?: string | number | boolean | undefined
								indigoA11?: string | number | boolean | undefined
								indigoA12?: string | number | boolean | undefined
								violetA1?: string | number | boolean | undefined
								violetA2?: string | number | boolean | undefined
								violetA3?: string | number | boolean | undefined
								violetA4?: string | number | boolean | undefined
								violetA5?: string | number | boolean | undefined
								violetA6?: string | number | boolean | undefined
								violetA7?: string | number | boolean | undefined
								violetA8?: string | number | boolean | undefined
								violetA9?: string | number | boolean | undefined
								violetA10?: string | number | boolean | undefined
								violetA11?: string | number | boolean | undefined
								violetA12?: string | number | boolean | undefined
								purpleA1?: string | number | boolean | undefined
								purpleA2?: string | number | boolean | undefined
								purpleA3?: string | number | boolean | undefined
								purpleA4?: string | number | boolean | undefined
								purpleA5?: string | number | boolean | undefined
								purpleA6?: string | number | boolean | undefined
								purpleA7?: string | number | boolean | undefined
								purpleA8?: string | number | boolean | undefined
								purpleA9?: string | number | boolean | undefined
								purpleA10?: string | number | boolean | undefined
								purpleA11?: string | number | boolean | undefined
								purpleA12?: string | number | boolean | undefined
								plumA1?: string | number | boolean | undefined
								plumA2?: string | number | boolean | undefined
								plumA3?: string | number | boolean | undefined
								plumA4?: string | number | boolean | undefined
								plumA5?: string | number | boolean | undefined
								plumA6?: string | number | boolean | undefined
								plumA7?: string | number | boolean | undefined
								plumA8?: string | number | boolean | undefined
								plumA9?: string | number | boolean | undefined
								plumA10?: string | number | boolean | undefined
								plumA11?: string | number | boolean | undefined
								plumA12?: string | number | boolean | undefined
								pinkA1?: string | number | boolean | undefined
								pinkA2?: string | number | boolean | undefined
								pinkA3?: string | number | boolean | undefined
								pinkA4?: string | number | boolean | undefined
								pinkA5?: string | number | boolean | undefined
								pinkA6?: string | number | boolean | undefined
								pinkA7?: string | number | boolean | undefined
								pinkA8?: string | number | boolean | undefined
								pinkA9?: string | number | boolean | undefined
								pinkA10?: string | number | boolean | undefined
								pinkA11?: string | number | boolean | undefined
								pinkA12?: string | number | boolean | undefined
								crimsonA1?: string | number | boolean | undefined
								crimsonA2?: string | number | boolean | undefined
								crimsonA3?: string | number | boolean | undefined
								crimsonA4?: string | number | boolean | undefined
								crimsonA5?: string | number | boolean | undefined
								crimsonA6?: string | number | boolean | undefined
								crimsonA7?: string | number | boolean | undefined
								crimsonA8?: string | number | boolean | undefined
								crimsonA9?: string | number | boolean | undefined
								crimsonA10?: string | number | boolean | undefined
								crimsonA11?: string | number | boolean | undefined
								crimsonA12?: string | number | boolean | undefined
								redA1?: string | number | boolean | undefined
								redA2?: string | number | boolean | undefined
								redA3?: string | number | boolean | undefined
								redA4?: string | number | boolean | undefined
								redA5?: string | number | boolean | undefined
								redA6?: string | number | boolean | undefined
								redA7?: string | number | boolean | undefined
								redA8?: string | number | boolean | undefined
								redA9?: string | number | boolean | undefined
								redA10?: string | number | boolean | undefined
								redA11?: string | number | boolean | undefined
								redA12?: string | number | boolean | undefined
								tomatoA1?: string | number | boolean | undefined
								tomatoA2?: string | number | boolean | undefined
								tomatoA3?: string | number | boolean | undefined
								tomatoA4?: string | number | boolean | undefined
								tomatoA5?: string | number | boolean | undefined
								tomatoA6?: string | number | boolean | undefined
								tomatoA7?: string | number | boolean | undefined
								tomatoA8?: string | number | boolean | undefined
								tomatoA9?: string | number | boolean | undefined
								tomatoA10?: string | number | boolean | undefined
								tomatoA11?: string | number | boolean | undefined
								tomatoA12?: string | number | boolean | undefined
								sandA1?: string | number | boolean | undefined
								sandA2?: string | number | boolean | undefined
								sandA3?: string | number | boolean | undefined
								sandA4?: string | number | boolean | undefined
								sandA5?: string | number | boolean | undefined
								sandA6?: string | number | boolean | undefined
								sandA7?: string | number | boolean | undefined
								sandA8?: string | number | boolean | undefined
								sandA9?: string | number | boolean | undefined
								sandA10?: string | number | boolean | undefined
								sandA11?: string | number | boolean | undefined
								sandA12?: string | number | boolean | undefined
								oliveA1?: string | number | boolean | undefined
								oliveA2?: string | number | boolean | undefined
								oliveA3?: string | number | boolean | undefined
								oliveA4?: string | number | boolean | undefined
								oliveA5?: string | number | boolean | undefined
								oliveA6?: string | number | boolean | undefined
								oliveA7?: string | number | boolean | undefined
								oliveA8?: string | number | boolean | undefined
								oliveA9?: string | number | boolean | undefined
								oliveA10?: string | number | boolean | undefined
								oliveA11?: string | number | boolean | undefined
								oliveA12?: string | number | boolean | undefined
								sageA1?: string | number | boolean | undefined
								sageA2?: string | number | boolean | undefined
								sageA3?: string | number | boolean | undefined
								sageA4?: string | number | boolean | undefined
								sageA5?: string | number | boolean | undefined
								sageA6?: string | number | boolean | undefined
								sageA7?: string | number | boolean | undefined
								sageA8?: string | number | boolean | undefined
								sageA9?: string | number | boolean | undefined
								sageA10?: string | number | boolean | undefined
								sageA11?: string | number | boolean | undefined
								sageA12?: string | number | boolean | undefined
								slateA1?: string | number | boolean | undefined
								slateA2?: string | number | boolean | undefined
								slateA3?: string | number | boolean | undefined
								slateA4?: string | number | boolean | undefined
								slateA5?: string | number | boolean | undefined
								slateA6?: string | number | boolean | undefined
								slateA7?: string | number | boolean | undefined
								slateA8?: string | number | boolean | undefined
								slateA9?: string | number | boolean | undefined
								slateA10?: string | number | boolean | undefined
								slateA11?: string | number | boolean | undefined
								slateA12?: string | number | boolean | undefined
								mauveA1?: string | number | boolean | undefined
								mauveA2?: string | number | boolean | undefined
								mauveA3?: string | number | boolean | undefined
								mauveA4?: string | number | boolean | undefined
								mauveA5?: string | number | boolean | undefined
								mauveA6?: string | number | boolean | undefined
								mauveA7?: string | number | boolean | undefined
								mauveA8?: string | number | boolean | undefined
								mauveA9?: string | number | boolean | undefined
								mauveA10?: string | number | boolean | undefined
								mauveA11?: string | number | boolean | undefined
								mauveA12?: string | number | boolean | undefined
								grayA1?: string | number | boolean | undefined
								grayA2?: string | number | boolean | undefined
								grayA3?: string | number | boolean | undefined
								grayA4?: string | number | boolean | undefined
								grayA5?: string | number | boolean | undefined
								grayA6?: string | number | boolean | undefined
								grayA7?: string | number | boolean | undefined
								grayA8?: string | number | boolean | undefined
								grayA9?: string | number | boolean | undefined
								grayA10?: string | number | boolean | undefined
								grayA11?: string | number | boolean | undefined
								grayA12?: string | number | boolean | undefined
								gold1?: string | number | boolean | undefined
								gold2?: string | number | boolean | undefined
								gold3?: string | number | boolean | undefined
								gold4?: string | number | boolean | undefined
								gold5?: string | number | boolean | undefined
								gold6?: string | number | boolean | undefined
								gold7?: string | number | boolean | undefined
								gold8?: string | number | boolean | undefined
								gold9?: string | number | boolean | undefined
								gold10?: string | number | boolean | undefined
								gold11?: string | number | boolean | undefined
								gold12?: string | number | boolean | undefined
								bronze1?: string | number | boolean | undefined
								bronze2?: string | number | boolean | undefined
								bronze3?: string | number | boolean | undefined
								bronze4?: string | number | boolean | undefined
								bronze5?: string | number | boolean | undefined
								bronze6?: string | number | boolean | undefined
								bronze7?: string | number | boolean | undefined
								bronze8?: string | number | boolean | undefined
								bronze9?: string | number | boolean | undefined
								bronze10?: string | number | boolean | undefined
								bronze11?: string | number | boolean | undefined
								bronze12?: string | number | boolean | undefined
								brown1?: string | number | boolean | undefined
								brown2?: string | number | boolean | undefined
								brown3?: string | number | boolean | undefined
								brown4?: string | number | boolean | undefined
								brown5?: string | number | boolean | undefined
								brown6?: string | number | boolean | undefined
								brown7?: string | number | boolean | undefined
								brown8?: string | number | boolean | undefined
								brown9?: string | number | boolean | undefined
								brown10?: string | number | boolean | undefined
								brown11?: string | number | boolean | undefined
								brown12?: string | number | boolean | undefined
								orange1?: string | number | boolean | undefined
								orange2?: string | number | boolean | undefined
								orange3?: string | number | boolean | undefined
								orange4?: string | number | boolean | undefined
								orange5?: string | number | boolean | undefined
								orange6?: string | number | boolean | undefined
								orange7?: string | number | boolean | undefined
								orange8?: string | number | boolean | undefined
								orange9?: string | number | boolean | undefined
								orange10?: string | number | boolean | undefined
								orange11?: string | number | boolean | undefined
								orange12?: string | number | boolean | undefined
								amber1?: string | number | boolean | undefined
								amber2?: string | number | boolean | undefined
								amber3?: string | number | boolean | undefined
								amber4?: string | number | boolean | undefined
								amber5?: string | number | boolean | undefined
								amber6?: string | number | boolean | undefined
								amber7?: string | number | boolean | undefined
								amber8?: string | number | boolean | undefined
								amber9?: string | number | boolean | undefined
								amber10?: string | number | boolean | undefined
								amber11?: string | number | boolean | undefined
								amber12?: string | number | boolean | undefined
								yellow1?: string | number | boolean | undefined
								yellow2?: string | number | boolean | undefined
								yellow3?: string | number | boolean | undefined
								yellow4?: string | number | boolean | undefined
								yellow5?: string | number | boolean | undefined
								yellow6?: string | number | boolean | undefined
								yellow7?: string | number | boolean | undefined
								yellow8?: string | number | boolean | undefined
								yellow9?: string | number | boolean | undefined
								yellow10?: string | number | boolean | undefined
								yellow11?: string | number | boolean | undefined
								yellow12?: string | number | boolean | undefined
								lime1?: string | number | boolean | undefined
								lime2?: string | number | boolean | undefined
								lime3?: string | number | boolean | undefined
								lime4?: string | number | boolean | undefined
								lime5?: string | number | boolean | undefined
								lime6?: string | number | boolean | undefined
								lime7?: string | number | boolean | undefined
								lime8?: string | number | boolean | undefined
								lime9?: string | number | boolean | undefined
								lime10?: string | number | boolean | undefined
								lime11?: string | number | boolean | undefined
								lime12?: string | number | boolean | undefined
								grass1?: string | number | boolean | undefined
								grass2?: string | number | boolean | undefined
								grass3?: string | number | boolean | undefined
								grass4?: string | number | boolean | undefined
								grass5?: string | number | boolean | undefined
								grass6?: string | number | boolean | undefined
								grass7?: string | number | boolean | undefined
								grass8?: string | number | boolean | undefined
								grass9?: string | number | boolean | undefined
								grass10?: string | number | boolean | undefined
								grass11?: string | number | boolean | undefined
								grass12?: string | number | boolean | undefined
								green1?: string | number | boolean | undefined
								green2?: string | number | boolean | undefined
								green3?: string | number | boolean | undefined
								green4?: string | number | boolean | undefined
								green5?: string | number | boolean | undefined
								green6?: string | number | boolean | undefined
								green7?: string | number | boolean | undefined
								green8?: string | number | boolean | undefined
								green9?: string | number | boolean | undefined
								green10?: string | number | boolean | undefined
								green11?: string | number | boolean | undefined
								green12?: string | number | boolean | undefined
								teal1?: string | number | boolean | undefined
								teal2?: string | number | boolean | undefined
								teal3?: string | number | boolean | undefined
								teal4?: string | number | boolean | undefined
								teal5?: string | number | boolean | undefined
								teal6?: string | number | boolean | undefined
								teal7?: string | number | boolean | undefined
								teal8?: string | number | boolean | undefined
								teal9?: string | number | boolean | undefined
								teal10?: string | number | boolean | undefined
								teal11?: string | number | boolean | undefined
								teal12?: string | number | boolean | undefined
								cyan1?: string | number | boolean | undefined
								cyan2?: string | number | boolean | undefined
								cyan3?: string | number | boolean | undefined
								cyan4?: string | number | boolean | undefined
								cyan5?: string | number | boolean | undefined
								cyan6?: string | number | boolean | undefined
								cyan7?: string | number | boolean | undefined
								cyan8?: string | number | boolean | undefined
								cyan9?: string | number | boolean | undefined
								cyan10?: string | number | boolean | undefined
								cyan11?: string | number | boolean | undefined
								cyan12?: string | number | boolean | undefined
								mint1?: string | number | boolean | undefined
								mint2?: string | number | boolean | undefined
								mint3?: string | number | boolean | undefined
								mint4?: string | number | boolean | undefined
								mint5?: string | number | boolean | undefined
								mint6?: string | number | boolean | undefined
								mint7?: string | number | boolean | undefined
								mint8?: string | number | boolean | undefined
								mint9?: string | number | boolean | undefined
								mint10?: string | number | boolean | undefined
								mint11?: string | number | boolean | undefined
								mint12?: string | number | boolean | undefined
								sky1?: string | number | boolean | undefined
								sky2?: string | number | boolean | undefined
								sky3?: string | number | boolean | undefined
								sky4?: string | number | boolean | undefined
								sky5?: string | number | boolean | undefined
								sky6?: string | number | boolean | undefined
								sky7?: string | number | boolean | undefined
								sky8?: string | number | boolean | undefined
								sky9?: string | number | boolean | undefined
								sky10?: string | number | boolean | undefined
								sky11?: string | number | boolean | undefined
								sky12?: string | number | boolean | undefined
								blue1?: string | number | boolean | undefined
								blue2?: string | number | boolean | undefined
								blue3?: string | number | boolean | undefined
								blue4?: string | number | boolean | undefined
								blue5?: string | number | boolean | undefined
								blue6?: string | number | boolean | undefined
								blue7?: string | number | boolean | undefined
								blue8?: string | number | boolean | undefined
								blue9?: string | number | boolean | undefined
								blue10?: string | number | boolean | undefined
								blue11?: string | number | boolean | undefined
								blue12?: string | number | boolean | undefined
								indigo1?: string | number | boolean | undefined
								indigo2?: string | number | boolean | undefined
								indigo3?: string | number | boolean | undefined
								indigo4?: string | number | boolean | undefined
								indigo5?: string | number | boolean | undefined
								indigo6?: string | number | boolean | undefined
								indigo7?: string | number | boolean | undefined
								indigo8?: string | number | boolean | undefined
								indigo9?: string | number | boolean | undefined
								indigo10?: string | number | boolean | undefined
								indigo11?: string | number | boolean | undefined
								indigo12?: string | number | boolean | undefined
								violet1?: string | number | boolean | undefined
								violet2?: string | number | boolean | undefined
								violet3?: string | number | boolean | undefined
								violet4?: string | number | boolean | undefined
								violet5?: string | number | boolean | undefined
								violet6?: string | number | boolean | undefined
								violet7?: string | number | boolean | undefined
								violet8?: string | number | boolean | undefined
								violet9?: string | number | boolean | undefined
								violet10?: string | number | boolean | undefined
								violet11?: string | number | boolean | undefined
								violet12?: string | number | boolean | undefined
								purple1?: string | number | boolean | undefined
								purple2?: string | number | boolean | undefined
								purple3?: string | number | boolean | undefined
								purple4?: string | number | boolean | undefined
								purple5?: string | number | boolean | undefined
								purple6?: string | number | boolean | undefined
								purple7?: string | number | boolean | undefined
								purple8?: string | number | boolean | undefined
								purple9?: string | number | boolean | undefined
								purple10?: string | number | boolean | undefined
								purple11?: string | number | boolean | undefined
								purple12?: string | number | boolean | undefined
								plum1?: string | number | boolean | undefined
								plum2?: string | number | boolean | undefined
								plum3?: string | number | boolean | undefined
								plum4?: string | number | boolean | undefined
								plum5?: string | number | boolean | undefined
								plum6?: string | number | boolean | undefined
								plum7?: string | number | boolean | undefined
								plum8?: string | number | boolean | undefined
								plum9?: string | number | boolean | undefined
								plum10?: string | number | boolean | undefined
								plum11?: string | number | boolean | undefined
								plum12?: string | number | boolean | undefined
								pink1?: string | number | boolean | undefined
								pink2?: string | number | boolean | undefined
								pink3?: string | number | boolean | undefined
								pink4?: string | number | boolean | undefined
								pink5?: string | number | boolean | undefined
								pink6?: string | number | boolean | undefined
								pink7?: string | number | boolean | undefined
								pink8?: string | number | boolean | undefined
								pink9?: string | number | boolean | undefined
								pink10?: string | number | boolean | undefined
								pink11?: string | number | boolean | undefined
								pink12?: string | number | boolean | undefined
								crimson1?: string | number | boolean | undefined
								crimson2?: string | number | boolean | undefined
								crimson3?: string | number | boolean | undefined
								crimson4?: string | number | boolean | undefined
								crimson5?: string | number | boolean | undefined
								crimson6?: string | number | boolean | undefined
								crimson7?: string | number | boolean | undefined
								crimson8?: string | number | boolean | undefined
								crimson9?: string | number | boolean | undefined
								crimson10?: string | number | boolean | undefined
								crimson11?: string | number | boolean | undefined
								crimson12?: string | number | boolean | undefined
								red1?: string | number | boolean | undefined
								red2?: string | number | boolean | undefined
								red3?: string | number | boolean | undefined
								red4?: string | number | boolean | undefined
								red5?: string | number | boolean | undefined
								red6?: string | number | boolean | undefined
								red7?: string | number | boolean | undefined
								red8?: string | number | boolean | undefined
								red9?: string | number | boolean | undefined
								red10?: string | number | boolean | undefined
								red11?: string | number | boolean | undefined
								red12?: string | number | boolean | undefined
								tomato1?: string | number | boolean | undefined
								tomato2?: string | number | boolean | undefined
								tomato3?: string | number | boolean | undefined
								tomato4?: string | number | boolean | undefined
								tomato5?: string | number | boolean | undefined
								tomato6?: string | number | boolean | undefined
								tomato7?: string | number | boolean | undefined
								tomato8?: string | number | boolean | undefined
								tomato9?: string | number | boolean | undefined
								tomato10?: string | number | boolean | undefined
								tomato11?: string | number | boolean | undefined
								tomato12?: string | number | boolean | undefined
								sand1?: string | number | boolean | undefined
								sand2?: string | number | boolean | undefined
								sand3?: string | number | boolean | undefined
								sand4?: string | number | boolean | undefined
								sand5?: string | number | boolean | undefined
								sand6?: string | number | boolean | undefined
								sand7?: string | number | boolean | undefined
								sand8?: string | number | boolean | undefined
								sand9?: string | number | boolean | undefined
								sand10?: string | number | boolean | undefined
								sand11?: string | number | boolean | undefined
								sand12?: string | number | boolean | undefined
								olive1?: string | number | boolean | undefined
								olive2?: string | number | boolean | undefined
								olive3?: string | number | boolean | undefined
								olive4?: string | number | boolean | undefined
								olive5?: string | number | boolean | undefined
								olive6?: string | number | boolean | undefined
								olive7?: string | number | boolean | undefined
								olive8?: string | number | boolean | undefined
								olive9?: string | number | boolean | undefined
								olive10?: string | number | boolean | undefined
								olive11?: string | number | boolean | undefined
								olive12?: string | number | boolean | undefined
								sage1?: string | number | boolean | undefined
								sage2?: string | number | boolean | undefined
								sage3?: string | number | boolean | undefined
								sage4?: string | number | boolean | undefined
								sage5?: string | number | boolean | undefined
								sage6?: string | number | boolean | undefined
								sage7?: string | number | boolean | undefined
								sage8?: string | number | boolean | undefined
								sage9?: string | number | boolean | undefined
								sage10?: string | number | boolean | undefined
								sage11?: string | number | boolean | undefined
								sage12?: string | number | boolean | undefined
								slate1?: string | number | boolean | undefined
								slate2?: string | number | boolean | undefined
								slate3?: string | number | boolean | undefined
								slate4?: string | number | boolean | undefined
								slate5?: string | number | boolean | undefined
								slate6?: string | number | boolean | undefined
								slate7?: string | number | boolean | undefined
								slate8?: string | number | boolean | undefined
								slate9?: string | number | boolean | undefined
								slate10?: string | number | boolean | undefined
								slate11?: string | number | boolean | undefined
								slate12?: string | number | boolean | undefined
								mauve1?: string | number | boolean | undefined
								mauve2?: string | number | boolean | undefined
								mauve3?: string | number | boolean | undefined
								mauve4?: string | number | boolean | undefined
								mauve5?: string | number | boolean | undefined
								mauve6?: string | number | boolean | undefined
								mauve7?: string | number | boolean | undefined
								mauve8?: string | number | boolean | undefined
								mauve9?: string | number | boolean | undefined
								mauve10?: string | number | boolean | undefined
								mauve11?: string | number | boolean | undefined
								mauve12?: string | number | boolean | undefined
								gray1?: string | number | boolean | undefined
								gray2?: string | number | boolean | undefined
								gray3?: string | number | boolean | undefined
								gray4?: string | number | boolean | undefined
								gray5?: string | number | boolean | undefined
								gray6?: string | number | boolean | undefined
								gray7?: string | number | boolean | undefined
								gray8?: string | number | boolean | undefined
								gray9?: string | number | boolean | undefined
								gray10?: string | number | boolean | undefined
								gray11?: string | number | boolean | undefined
								gray12?: string | number | boolean | undefined
						  }
						| undefined
					fonts?:
						| {
								untitled?: string | number | boolean | undefined
								mono?: string | number | boolean | undefined
						  }
						| undefined
					space?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								5?: string | number | boolean | undefined
								6?: string | number | boolean | undefined
								7?: string | number | boolean | undefined
								8?: string | number | boolean | undefined
								9?: string | number | boolean | undefined
						  }
						| undefined
					sizes?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								5?: string | number | boolean | undefined
								6?: string | number | boolean | undefined
								7?: string | number | boolean | undefined
								8?: string | number | boolean | undefined
								9?: string | number | boolean | undefined
						  }
						| undefined
					fontSizes?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								5?: string | number | boolean | undefined
								6?: string | number | boolean | undefined
								7?: string | number | boolean | undefined
								8?: string | number | boolean | undefined
								9?: string | number | boolean | undefined
						  }
						| undefined
					radii?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								round?: string | number | boolean | undefined
								pill?: string | number | boolean | undefined
						  }
						| undefined
					zIndices?:
						| {
								1?: string | number | boolean | undefined
								2?: string | number | boolean | undefined
								3?: string | number | boolean | undefined
								4?: string | number | boolean | undefined
								max?: string | number | boolean | undefined
						  }
						| undefined
			  } & {
					[x: string]: {
						[x: string]: string | number | boolean
						[x: number]: string | number | boolean
					}
			  }),
	>(
		nameOrScalesArg0: Argument0,
		nameOrScalesArg1?: Argument1 | undefined,
	) => string & {
		className: string
		selector: string
	} & (Argument0 extends {}
			? import('@stitches/react/types/stitches').ThemeTokens<Argument0, ''>
			: Argument1 extends {}
			? import('@stitches/react/types/stitches').ThemeTokens<Argument1, ''>
			: {}),
	getCssText: () => string,
	keyframes: (style: {
		[offset: string]: import('@stitches/react/types/css-util').CSS<
			{
				bp1: '(min-width: 520px)'
				bp2: '(min-width: 900px)'
				bp3: '(min-width: 1200px)'
				bp4: '(min-width: 1800px)'
				motion: '(prefers-reduced-motion)'
				hover: '(any-hover: hover)'
				dark: '(prefers-color-scheme: dark)'
				light: '(prefers-color-scheme: light)'
			},
			{
				colors: {
					hiContrast: string
					loContrast: string
					canvas: string
					panel: string
					transparentPanel: string
					shadowLight: string
					shadowDark: string
					blackA1: string
					blackA2: string
					blackA3: string
					blackA4: string
					blackA5: string
					blackA6: string
					blackA7: string
					blackA8: string
					blackA9: string
					blackA10: string
					blackA11: string
					blackA12: string
					whiteA1: string
					whiteA2: string
					whiteA3: string
					whiteA4: string
					whiteA5: string
					whiteA6: string
					whiteA7: string
					whiteA8: string
					whiteA9: string
					whiteA10: string
					whiteA11: string
					whiteA12: string
					goldA1: string
					goldA2: string
					goldA3: string
					goldA4: string
					goldA5: string
					goldA6: string
					goldA7: string
					goldA8: string
					goldA9: string
					goldA10: string
					goldA11: string
					goldA12: string
					bronzeA1: string
					bronzeA2: string
					bronzeA3: string
					bronzeA4: string
					bronzeA5: string
					bronzeA6: string
					bronzeA7: string
					bronzeA8: string
					bronzeA9: string
					bronzeA10: string
					bronzeA11: string
					bronzeA12: string
					brownA1: string
					brownA2: string
					brownA3: string
					brownA4: string
					brownA5: string
					brownA6: string
					brownA7: string
					brownA8: string
					brownA9: string
					brownA10: string
					brownA11: string
					brownA12: string
					orangeA1: string
					orangeA2: string
					orangeA3: string
					orangeA4: string
					orangeA5: string
					orangeA6: string
					orangeA7: string
					orangeA8: string
					orangeA9: string
					orangeA10: string
					orangeA11: string
					orangeA12: string
					amberA1: string
					amberA2: string
					amberA3: string
					amberA4: string
					amberA5: string
					amberA6: string
					amberA7: string
					amberA8: string
					amberA9: string
					amberA10: string
					amberA11: string
					amberA12: string
					yellowA1: string
					yellowA2: string
					yellowA3: string
					yellowA4: string
					yellowA5: string
					yellowA6: string
					yellowA7: string
					yellowA8: string
					yellowA9: string
					yellowA10: string
					yellowA11: string
					yellowA12: string
					limeA1: string
					limeA2: string
					limeA3: string
					limeA4: string
					limeA5: string
					limeA6: string
					limeA7: string
					limeA8: string
					limeA9: string
					limeA10: string
					limeA11: string
					limeA12: string
					grassA1: string
					grassA2: string
					grassA3: string
					grassA4: string
					grassA5: string
					grassA6: string
					grassA7: string
					grassA8: string
					grassA9: string
					grassA10: string
					grassA11: string
					grassA12: string
					greenA1: string
					greenA2: string
					greenA3: string
					greenA4: string
					greenA5: string
					greenA6: string
					greenA7: string
					greenA8: string
					greenA9: string
					greenA10: string
					greenA11: string
					greenA12: string
					tealA1: string
					tealA2: string
					tealA3: string
					tealA4: string
					tealA5: string
					tealA6: string
					tealA7: string
					tealA8: string
					tealA9: string
					tealA10: string
					tealA11: string
					tealA12: string
					cyanA1: string
					cyanA2: string
					cyanA3: string
					cyanA4: string
					cyanA5: string
					cyanA6: string
					cyanA7: string
					cyanA8: string
					cyanA9: string
					cyanA10: string
					cyanA11: string
					cyanA12: string
					mintA1: string
					mintA2: string
					mintA3: string
					mintA4: string
					mintA5: string
					mintA6: string
					mintA7: string
					mintA8: string
					mintA9: string
					mintA10: string
					mintA11: string
					mintA12: string
					skyA1: string
					skyA2: string
					skyA3: string
					skyA4: string
					skyA5: string
					skyA6: string
					skyA7: string
					skyA8: string
					skyA9: string
					skyA10: string
					skyA11: string
					skyA12: string
					blueA1: string
					blueA2: string
					blueA3: string
					blueA4: string
					blueA5: string
					blueA6: string
					blueA7: string
					blueA8: string
					blueA9: string
					blueA10: string
					blueA11: string
					blueA12: string
					indigoA1: string
					indigoA2: string
					indigoA3: string
					indigoA4: string
					indigoA5: string
					indigoA6: string
					indigoA7: string
					indigoA8: string
					indigoA9: string
					indigoA10: string
					indigoA11: string
					indigoA12: string
					violetA1: string
					violetA2: string
					violetA3: string
					violetA4: string
					violetA5: string
					violetA6: string
					violetA7: string
					violetA8: string
					violetA9: string
					violetA10: string
					violetA11: string
					violetA12: string
					purpleA1: string
					purpleA2: string
					purpleA3: string
					purpleA4: string
					purpleA5: string
					purpleA6: string
					purpleA7: string
					purpleA8: string
					purpleA9: string
					purpleA10: string
					purpleA11: string
					purpleA12: string
					plumA1: string
					plumA2: string
					plumA3: string
					plumA4: string
					plumA5: string
					plumA6: string
					plumA7: string
					plumA8: string
					plumA9: string
					plumA10: string
					plumA11: string
					plumA12: string
					pinkA1: string
					pinkA2: string
					pinkA3: string
					pinkA4: string
					pinkA5: string
					pinkA6: string
					pinkA7: string
					pinkA8: string
					pinkA9: string
					pinkA10: string
					pinkA11: string
					pinkA12: string
					crimsonA1: string
					crimsonA2: string
					crimsonA3: string
					crimsonA4: string
					crimsonA5: string
					crimsonA6: string
					crimsonA7: string
					crimsonA8: string
					crimsonA9: string
					crimsonA10: string
					crimsonA11: string
					crimsonA12: string
					redA1: string
					redA2: string
					redA3: string
					redA4: string
					redA5: string
					redA6: string
					redA7: string
					redA8: string
					redA9: string
					redA10: string
					redA11: string
					redA12: string
					tomatoA1: string
					tomatoA2: string
					tomatoA3: string
					tomatoA4: string
					tomatoA5: string
					tomatoA6: string
					tomatoA7: string
					tomatoA8: string
					tomatoA9: string
					tomatoA10: string
					tomatoA11: string
					tomatoA12: string
					sandA1: string
					sandA2: string
					sandA3: string
					sandA4: string
					sandA5: string
					sandA6: string
					sandA7: string
					sandA8: string
					sandA9: string
					sandA10: string
					sandA11: string
					sandA12: string
					oliveA1: string
					oliveA2: string
					oliveA3: string
					oliveA4: string
					oliveA5: string
					oliveA6: string
					oliveA7: string
					oliveA8: string
					oliveA9: string
					oliveA10: string
					oliveA11: string
					oliveA12: string
					sageA1: string
					sageA2: string
					sageA3: string
					sageA4: string
					sageA5: string
					sageA6: string
					sageA7: string
					sageA8: string
					sageA9: string
					sageA10: string
					sageA11: string
					sageA12: string
					slateA1: string
					slateA2: string
					slateA3: string
					slateA4: string
					slateA5: string
					slateA6: string
					slateA7: string
					slateA8: string
					slateA9: string
					slateA10: string
					slateA11: string
					slateA12: string
					mauveA1: string
					mauveA2: string
					mauveA3: string
					mauveA4: string
					mauveA5: string
					mauveA6: string
					mauveA7: string
					mauveA8: string
					mauveA9: string
					mauveA10: string
					mauveA11: string
					mauveA12: string
					grayA1: string
					grayA2: string
					grayA3: string
					grayA4: string
					grayA5: string
					grayA6: string
					grayA7: string
					grayA8: string
					grayA9: string
					grayA10: string
					grayA11: string
					grayA12: string
					gold1: string
					gold2: string
					gold3: string
					gold4: string
					gold5: string
					gold6: string
					gold7: string
					gold8: string
					gold9: string
					gold10: string
					gold11: string
					gold12: string
					bronze1: string
					bronze2: string
					bronze3: string
					bronze4: string
					bronze5: string
					bronze6: string
					bronze7: string
					bronze8: string
					bronze9: string
					bronze10: string
					bronze11: string
					bronze12: string
					brown1: string
					brown2: string
					brown3: string
					brown4: string
					brown5: string
					brown6: string
					brown7: string
					brown8: string
					brown9: string
					brown10: string
					brown11: string
					brown12: string
					orange1: string
					orange2: string
					orange3: string
					orange4: string
					orange5: string
					orange6: string
					orange7: string
					orange8: string
					orange9: string
					orange10: string
					orange11: string
					orange12: string
					amber1: string
					amber2: string
					amber3: string
					amber4: string
					amber5: string
					amber6: string
					amber7: string
					amber8: string
					amber9: string
					amber10: string
					amber11: string
					amber12: string
					yellow1: string
					yellow2: string
					yellow3: string
					yellow4: string
					yellow5: string
					yellow6: string
					yellow7: string
					yellow8: string
					yellow9: string
					yellow10: string
					yellow11: string
					yellow12: string
					lime1: string
					lime2: string
					lime3: string
					lime4: string
					lime5: string
					lime6: string
					lime7: string
					lime8: string
					lime9: string
					lime10: string
					lime11: string
					lime12: string
					grass1: string
					grass2: string
					grass3: string
					grass4: string
					grass5: string
					grass6: string
					grass7: string
					grass8: string
					grass9: string
					grass10: string
					grass11: string
					grass12: string
					green1: string
					green2: string
					green3: string
					green4: string
					green5: string
					green6: string
					green7: string
					green8: string
					green9: string
					green10: string
					green11: string
					green12: string
					teal1: string
					teal2: string
					teal3: string
					teal4: string
					teal5: string
					teal6: string
					teal7: string
					teal8: string
					teal9: string
					teal10: string
					teal11: string
					teal12: string
					cyan1: string
					cyan2: string
					cyan3: string
					cyan4: string
					cyan5: string
					cyan6: string
					cyan7: string
					cyan8: string
					cyan9: string
					cyan10: string
					cyan11: string
					cyan12: string
					mint1: string
					mint2: string
					mint3: string
					mint4: string
					mint5: string
					mint6: string
					mint7: string
					mint8: string
					mint9: string
					mint10: string
					mint11: string
					mint12: string
					sky1: string
					sky2: string
					sky3: string
					sky4: string
					sky5: string
					sky6: string
					sky7: string
					sky8: string
					sky9: string
					sky10: string
					sky11: string
					sky12: string
					blue1: string
					blue2: string
					blue3: string
					blue4: string
					blue5: string
					blue6: string
					blue7: string
					blue8: string
					blue9: string
					blue10: string
					blue11: string
					blue12: string
					indigo1: string
					indigo2: string
					indigo3: string
					indigo4: string
					indigo5: string
					indigo6: string
					indigo7: string
					indigo8: string
					indigo9: string
					indigo10: string
					indigo11: string
					indigo12: string
					violet1: string
					violet2: string
					violet3: string
					violet4: string
					violet5: string
					violet6: string
					violet7: string
					violet8: string
					violet9: string
					violet10: string
					violet11: string
					violet12: string
					purple1: string
					purple2: string
					purple3: string
					purple4: string
					purple5: string
					purple6: string
					purple7: string
					purple8: string
					purple9: string
					purple10: string
					purple11: string
					purple12: string
					plum1: string
					plum2: string
					plum3: string
					plum4: string
					plum5: string
					plum6: string
					plum7: string
					plum8: string
					plum9: string
					plum10: string
					plum11: string
					plum12: string
					pink1: string
					pink2: string
					pink3: string
					pink4: string
					pink5: string
					pink6: string
					pink7: string
					pink8: string
					pink9: string
					pink10: string
					pink11: string
					pink12: string
					crimson1: string
					crimson2: string
					crimson3: string
					crimson4: string
					crimson5: string
					crimson6: string
					crimson7: string
					crimson8: string
					crimson9: string
					crimson10: string
					crimson11: string
					crimson12: string
					red1: string
					red2: string
					red3: string
					red4: string
					red5: string
					red6: string
					red7: string
					red8: string
					red9: string
					red10: string
					red11: string
					red12: string
					tomato1: string
					tomato2: string
					tomato3: string
					tomato4: string
					tomato5: string
					tomato6: string
					tomato7: string
					tomato8: string
					tomato9: string
					tomato10: string
					tomato11: string
					tomato12: string
					sand1: string
					sand2: string
					sand3: string
					sand4: string
					sand5: string
					sand6: string
					sand7: string
					sand8: string
					sand9: string
					sand10: string
					sand11: string
					sand12: string
					olive1: string
					olive2: string
					olive3: string
					olive4: string
					olive5: string
					olive6: string
					olive7: string
					olive8: string
					olive9: string
					olive10: string
					olive11: string
					olive12: string
					sage1: string
					sage2: string
					sage3: string
					sage4: string
					sage5: string
					sage6: string
					sage7: string
					sage8: string
					sage9: string
					sage10: string
					sage11: string
					sage12: string
					slate1: string
					slate2: string
					slate3: string
					slate4: string
					slate5: string
					slate6: string
					slate7: string
					slate8: string
					slate9: string
					slate10: string
					slate11: string
					slate12: string
					mauve1: string
					mauve2: string
					mauve3: string
					mauve4: string
					mauve5: string
					mauve6: string
					mauve7: string
					mauve8: string
					mauve9: string
					mauve10: string
					mauve11: string
					mauve12: string
					gray1: string
					gray2: string
					gray3: string
					gray4: string
					gray5: string
					gray6: string
					gray7: string
					gray8: string
					gray9: string
					gray10: string
					gray11: string
					gray12: string
				}
				fonts: {
					untitled: string
					mono: string
				}
				space: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				sizes: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				fontSizes: {
					1: string
					2: string
					3: string
					4: string
					5: string
					6: string
					7: string
					8: string
					9: string
				}
				radii: {
					1: string
					2: string
					3: string
					4: string
					round: string
					pill: string
				}
				zIndices: {
					1: string
					2: string
					3: string
					4: string
					max: string
				}
			},
			import('@stitches/react/types/config').DefaultThemeMap,
			{
				p: (value: Stitches.PropertyValue<'padding'>) => {
					padding: Stitches.PropertyValue<'padding'>
				}
				pt: (value: Stitches.PropertyValue<'paddingTop'>) => {
					paddingTop: Stitches.PropertyValue<'paddingTop'>
				}
				pr: (value: Stitches.PropertyValue<'paddingRight'>) => {
					paddingRight: Stitches.PropertyValue<'paddingRight'>
				}
				pb: (value: Stitches.PropertyValue<'paddingBottom'>) => {
					paddingBottom: Stitches.PropertyValue<'paddingBottom'>
				}
				pl: (value: Stitches.PropertyValue<'paddingLeft'>) => {
					paddingLeft: Stitches.PropertyValue<'paddingLeft'>
				}
				px: (value: Stitches.PropertyValue<'paddingLeft'>) => {
					paddingLeft: Stitches.PropertyValue<'paddingLeft'>
					paddingRight: Stitches.PropertyValue<'paddingLeft'>
				}
				py: (value: Stitches.PropertyValue<'paddingTop'>) => {
					paddingTop: Stitches.PropertyValue<'paddingTop'>
					paddingBottom: Stitches.PropertyValue<'paddingTop'>
				}
				m: (value: Stitches.PropertyValue<'margin'>) => {
					margin: Stitches.PropertyValue<'margin'>
				}
				mt: (value: Stitches.PropertyValue<'marginTop'>) => {
					marginTop: Stitches.PropertyValue<'marginTop'>
				}
				mr: (value: Stitches.PropertyValue<'marginRight'>) => {
					marginRight: Stitches.PropertyValue<'marginRight'>
				}
				mb: (value: Stitches.PropertyValue<'marginBottom'>) => {
					marginBottom: Stitches.PropertyValue<'marginBottom'>
				}
				ml: (value: Stitches.PropertyValue<'marginLeft'>) => {
					marginLeft: Stitches.PropertyValue<'marginLeft'>
				}
				mx: (value: Stitches.PropertyValue<'marginLeft'>) => {
					marginLeft: Stitches.PropertyValue<'marginLeft'>
					marginRight: Stitches.PropertyValue<'marginLeft'>
				}
				my: (value: Stitches.PropertyValue<'marginTop'>) => {
					marginTop: Stitches.PropertyValue<'marginTop'>
					marginBottom: Stitches.PropertyValue<'marginTop'>
				}
				ta: (value: Stitches.PropertyValue<'textAlign'>) => {
					textAlign: Stitches.PropertyValue<'textAlign'>
				}
				fd: (value: Stitches.PropertyValue<'flexDirection'>) => {
					flexDirection: Stitches.PropertyValue<'flexDirection'>
				}
				fw: (value: Stitches.PropertyValue<'flexWrap'>) => {
					flexWrap: Stitches.PropertyValue<'flexWrap'>
				}
				ai: (value: Stitches.PropertyValue<'alignItems'>) => {
					alignItems: Stitches.PropertyValue<'alignItems'>
				}
				ac: (value: Stitches.PropertyValue<'alignContent'>) => {
					alignContent: Stitches.PropertyValue<'alignContent'>
				}
				jc: (value: Stitches.PropertyValue<'justifyContent'>) => {
					justifyContent: Stitches.PropertyValue<'justifyContent'>
				}
				as: (value: Stitches.PropertyValue<'alignSelf'>) => {
					alignSelf: Stitches.PropertyValue<'alignSelf'>
				}
				fg: (value: Stitches.PropertyValue<'flexGrow'>) => {
					flexGrow: Stitches.PropertyValue<'flexGrow'>
				}
				fs: (value: Stitches.PropertyValue<'flexShrink'>) => {
					flexShrink: Stitches.PropertyValue<'flexShrink'>
				}
				fb: (value: Stitches.PropertyValue<'flexBasis'>) => {
					flexBasis: Stitches.PropertyValue<'flexBasis'>
				}
				bc: (value: Stitches.PropertyValue<'backgroundColor'>) => {
					backgroundColor: Stitches.PropertyValue<'backgroundColor'>
				}
				br: (value: Stitches.PropertyValue<'borderRadius'>) => {
					borderRadius: Stitches.PropertyValue<'borderRadius'>
				}
				btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => {
					borderTopRightRadius: Stitches.PropertyValue<'borderTopRightRadius'>
				}
				bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => {
					borderBottomRightRadius: Stitches.PropertyValue<'borderBottomRightRadius'>
				}
				bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => {
					borderBottomLeftRadius: Stitches.PropertyValue<'borderBottomLeftRadius'>
				}
				btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => {
					borderTopLeftRadius: Stitches.PropertyValue<'borderTopLeftRadius'>
				}
				bs: (value: Stitches.PropertyValue<'boxShadow'>) => {
					boxShadow: Stitches.PropertyValue<'boxShadow'>
				}
				lh: (value: Stitches.PropertyValue<'lineHeight'>) => {
					lineHeight: Stitches.PropertyValue<'lineHeight'>
				}
				ox: (value: Stitches.PropertyValue<'overflowX'>) => {
					overflowX: Stitches.PropertyValue<'overflowX'>
				}
				oy: (value: Stitches.PropertyValue<'overflowY'>) => {
					overflowY: Stitches.PropertyValue<'overflowY'>
				}
				pe: (value: Stitches.PropertyValue<'pointerEvents'>) => {
					pointerEvents: Stitches.PropertyValue<'pointerEvents'>
				}
				us: (value: Stitches.PropertyValue<'userSelect'>) => {
					WebkitUserSelect: Stitches.PropertyValue<'userSelect'>
					userSelect: Stitches.PropertyValue<'userSelect'>
				}
				userSelect: (value: Stitches.PropertyValue<'userSelect'>) => {
					WebkitUserSelect: Stitches.PropertyValue<'userSelect'>
					userSelect: Stitches.PropertyValue<'userSelect'>
				}
				size: (value: Stitches.PropertyValue<'width'>) => {
					width: Stitches.PropertyValue<'width'>
					height: Stitches.PropertyValue<'width'>
				}
				appearance: (value: Stitches.PropertyValue<'appearance'>) => {
					WebkitAppearance: Stitches.PropertyValue<'appearance'>
					appearance: Stitches.PropertyValue<'appearance'>
				}
				backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => {
					WebkitBackgroundClip: Stitches.PropertyValue<'backgroundClip'>
					backgroundClip: Stitches.PropertyValue<'backgroundClip'>
				}
			}
		>
	}) => {
		(): string
		name: string
	},
	config: {
		prefix: ''
		media: {
			bp1: '(min-width: 520px)'
			bp2: '(min-width: 900px)'
			bp3: '(min-width: 1200px)'
			bp4: '(min-width: 1800px)'
			motion: '(prefers-reduced-motion)'
			hover: '(any-hover: hover)'
			dark: '(prefers-color-scheme: dark)'
			light: '(prefers-color-scheme: light)'
		}
		theme: {
			colors: {
				hiContrast: string
				loContrast: string
				canvas: string
				panel: string
				transparentPanel: string
				shadowLight: string
				shadowDark: string
				blackA1: string
				blackA2: string
				blackA3: string
				blackA4: string
				blackA5: string
				blackA6: string
				blackA7: string
				blackA8: string
				blackA9: string
				blackA10: string
				blackA11: string
				blackA12: string
				whiteA1: string
				whiteA2: string
				whiteA3: string
				whiteA4: string
				whiteA5: string
				whiteA6: string
				whiteA7: string
				whiteA8: string
				whiteA9: string
				whiteA10: string
				whiteA11: string
				whiteA12: string
				goldA1: string
				goldA2: string
				goldA3: string
				goldA4: string
				goldA5: string
				goldA6: string
				goldA7: string
				goldA8: string
				goldA9: string
				goldA10: string
				goldA11: string
				goldA12: string
				bronzeA1: string
				bronzeA2: string
				bronzeA3: string
				bronzeA4: string
				bronzeA5: string
				bronzeA6: string
				bronzeA7: string
				bronzeA8: string
				bronzeA9: string
				bronzeA10: string
				bronzeA11: string
				bronzeA12: string
				brownA1: string
				brownA2: string
				brownA3: string
				brownA4: string
				brownA5: string
				brownA6: string
				brownA7: string
				brownA8: string
				brownA9: string
				brownA10: string
				brownA11: string
				brownA12: string
				orangeA1: string
				orangeA2: string
				orangeA3: string
				orangeA4: string
				orangeA5: string
				orangeA6: string
				orangeA7: string
				orangeA8: string
				orangeA9: string
				orangeA10: string
				orangeA11: string
				orangeA12: string
				amberA1: string
				amberA2: string
				amberA3: string
				amberA4: string
				amberA5: string
				amberA6: string
				amberA7: string
				amberA8: string
				amberA9: string
				amberA10: string
				amberA11: string
				amberA12: string
				yellowA1: string
				yellowA2: string
				yellowA3: string
				yellowA4: string
				yellowA5: string
				yellowA6: string
				yellowA7: string
				yellowA8: string
				yellowA9: string
				yellowA10: string
				yellowA11: string
				yellowA12: string
				limeA1: string
				limeA2: string
				limeA3: string
				limeA4: string
				limeA5: string
				limeA6: string
				limeA7: string
				limeA8: string
				limeA9: string
				limeA10: string
				limeA11: string
				limeA12: string
				grassA1: string
				grassA2: string
				grassA3: string
				grassA4: string
				grassA5: string
				grassA6: string
				grassA7: string
				grassA8: string
				grassA9: string
				grassA10: string
				grassA11: string
				grassA12: string
				greenA1: string
				greenA2: string
				greenA3: string
				greenA4: string
				greenA5: string
				greenA6: string
				greenA7: string
				greenA8: string
				greenA9: string
				greenA10: string
				greenA11: string
				greenA12: string
				tealA1: string
				tealA2: string
				tealA3: string
				tealA4: string
				tealA5: string
				tealA6: string
				tealA7: string
				tealA8: string
				tealA9: string
				tealA10: string
				tealA11: string
				tealA12: string
				cyanA1: string
				cyanA2: string
				cyanA3: string
				cyanA4: string
				cyanA5: string
				cyanA6: string
				cyanA7: string
				cyanA8: string
				cyanA9: string
				cyanA10: string
				cyanA11: string
				cyanA12: string
				mintA1: string
				mintA2: string
				mintA3: string
				mintA4: string
				mintA5: string
				mintA6: string
				mintA7: string
				mintA8: string
				mintA9: string
				mintA10: string
				mintA11: string
				mintA12: string
				skyA1: string
				skyA2: string
				skyA3: string
				skyA4: string
				skyA5: string
				skyA6: string
				skyA7: string
				skyA8: string
				skyA9: string
				skyA10: string
				skyA11: string
				skyA12: string
				blueA1: string
				blueA2: string
				blueA3: string
				blueA4: string
				blueA5: string
				blueA6: string
				blueA7: string
				blueA8: string
				blueA9: string
				blueA10: string
				blueA11: string
				blueA12: string
				indigoA1: string
				indigoA2: string
				indigoA3: string
				indigoA4: string
				indigoA5: string
				indigoA6: string
				indigoA7: string
				indigoA8: string
				indigoA9: string
				indigoA10: string
				indigoA11: string
				indigoA12: string
				violetA1: string
				violetA2: string
				violetA3: string
				violetA4: string
				violetA5: string
				violetA6: string
				violetA7: string
				violetA8: string
				violetA9: string
				violetA10: string
				violetA11: string
				violetA12: string
				purpleA1: string
				purpleA2: string
				purpleA3: string
				purpleA4: string
				purpleA5: string
				purpleA6: string
				purpleA7: string
				purpleA8: string
				purpleA9: string
				purpleA10: string
				purpleA11: string
				purpleA12: string
				plumA1: string
				plumA2: string
				plumA3: string
				plumA4: string
				plumA5: string
				plumA6: string
				plumA7: string
				plumA8: string
				plumA9: string
				plumA10: string
				plumA11: string
				plumA12: string
				pinkA1: string
				pinkA2: string
				pinkA3: string
				pinkA4: string
				pinkA5: string
				pinkA6: string
				pinkA7: string
				pinkA8: string
				pinkA9: string
				pinkA10: string
				pinkA11: string
				pinkA12: string
				crimsonA1: string
				crimsonA2: string
				crimsonA3: string
				crimsonA4: string
				crimsonA5: string
				crimsonA6: string
				crimsonA7: string
				crimsonA8: string
				crimsonA9: string
				crimsonA10: string
				crimsonA11: string
				crimsonA12: string
				redA1: string
				redA2: string
				redA3: string
				redA4: string
				redA5: string
				redA6: string
				redA7: string
				redA8: string
				redA9: string
				redA10: string
				redA11: string
				redA12: string
				tomatoA1: string
				tomatoA2: string
				tomatoA3: string
				tomatoA4: string
				tomatoA5: string
				tomatoA6: string
				tomatoA7: string
				tomatoA8: string
				tomatoA9: string
				tomatoA10: string
				tomatoA11: string
				tomatoA12: string
				sandA1: string
				sandA2: string
				sandA3: string
				sandA4: string
				sandA5: string
				sandA6: string
				sandA7: string
				sandA8: string
				sandA9: string
				sandA10: string
				sandA11: string
				sandA12: string
				oliveA1: string
				oliveA2: string
				oliveA3: string
				oliveA4: string
				oliveA5: string
				oliveA6: string
				oliveA7: string
				oliveA8: string
				oliveA9: string
				oliveA10: string
				oliveA11: string
				oliveA12: string
				sageA1: string
				sageA2: string
				sageA3: string
				sageA4: string
				sageA5: string
				sageA6: string
				sageA7: string
				sageA8: string
				sageA9: string
				sageA10: string
				sageA11: string
				sageA12: string
				slateA1: string
				slateA2: string
				slateA3: string
				slateA4: string
				slateA5: string
				slateA6: string
				slateA7: string
				slateA8: string
				slateA9: string
				slateA10: string
				slateA11: string
				slateA12: string
				mauveA1: string
				mauveA2: string
				mauveA3: string
				mauveA4: string
				mauveA5: string
				mauveA6: string
				mauveA7: string
				mauveA8: string
				mauveA9: string
				mauveA10: string
				mauveA11: string
				mauveA12: string
				grayA1: string
				grayA2: string
				grayA3: string
				grayA4: string
				grayA5: string
				grayA6: string
				grayA7: string
				grayA8: string
				grayA9: string
				grayA10: string
				grayA11: string
				grayA12: string
				gold1: string
				gold2: string
				gold3: string
				gold4: string
				gold5: string
				gold6: string
				gold7: string
				gold8: string
				gold9: string
				gold10: string
				gold11: string
				gold12: string
				bronze1: string
				bronze2: string
				bronze3: string
				bronze4: string
				bronze5: string
				bronze6: string
				bronze7: string
				bronze8: string
				bronze9: string
				bronze10: string
				bronze11: string
				bronze12: string
				brown1: string
				brown2: string
				brown3: string
				brown4: string
				brown5: string
				brown6: string
				brown7: string
				brown8: string
				brown9: string
				brown10: string
				brown11: string
				brown12: string
				orange1: string
				orange2: string
				orange3: string
				orange4: string
				orange5: string
				orange6: string
				orange7: string
				orange8: string
				orange9: string
				orange10: string
				orange11: string
				orange12: string
				amber1: string
				amber2: string
				amber3: string
				amber4: string
				amber5: string
				amber6: string
				amber7: string
				amber8: string
				amber9: string
				amber10: string
				amber11: string
				amber12: string
				yellow1: string
				yellow2: string
				yellow3: string
				yellow4: string
				yellow5: string
				yellow6: string
				yellow7: string
				yellow8: string
				yellow9: string
				yellow10: string
				yellow11: string
				yellow12: string
				lime1: string
				lime2: string
				lime3: string
				lime4: string
				lime5: string
				lime6: string
				lime7: string
				lime8: string
				lime9: string
				lime10: string
				lime11: string
				lime12: string
				grass1: string
				grass2: string
				grass3: string
				grass4: string
				grass5: string
				grass6: string
				grass7: string
				grass8: string
				grass9: string
				grass10: string
				grass11: string
				grass12: string
				green1: string
				green2: string
				green3: string
				green4: string
				green5: string
				green6: string
				green7: string
				green8: string
				green9: string
				green10: string
				green11: string
				green12: string
				teal1: string
				teal2: string
				teal3: string
				teal4: string
				teal5: string
				teal6: string
				teal7: string
				teal8: string
				teal9: string
				teal10: string
				teal11: string
				teal12: string
				cyan1: string
				cyan2: string
				cyan3: string
				cyan4: string
				cyan5: string
				cyan6: string
				cyan7: string
				cyan8: string
				cyan9: string
				cyan10: string
				cyan11: string
				cyan12: string
				mint1: string
				mint2: string
				mint3: string
				mint4: string
				mint5: string
				mint6: string
				mint7: string
				mint8: string
				mint9: string
				mint10: string
				mint11: string
				mint12: string
				sky1: string
				sky2: string
				sky3: string
				sky4: string
				sky5: string
				sky6: string
				sky7: string
				sky8: string
				sky9: string
				sky10: string
				sky11: string
				sky12: string
				blue1: string
				blue2: string
				blue3: string
				blue4: string
				blue5: string
				blue6: string
				blue7: string
				blue8: string
				blue9: string
				blue10: string
				blue11: string
				blue12: string
				indigo1: string
				indigo2: string
				indigo3: string
				indigo4: string
				indigo5: string
				indigo6: string
				indigo7: string
				indigo8: string
				indigo9: string
				indigo10: string
				indigo11: string
				indigo12: string
				violet1: string
				violet2: string
				violet3: string
				violet4: string
				violet5: string
				violet6: string
				violet7: string
				violet8: string
				violet9: string
				violet10: string
				violet11: string
				violet12: string
				purple1: string
				purple2: string
				purple3: string
				purple4: string
				purple5: string
				purple6: string
				purple7: string
				purple8: string
				purple9: string
				purple10: string
				purple11: string
				purple12: string
				plum1: string
				plum2: string
				plum3: string
				plum4: string
				plum5: string
				plum6: string
				plum7: string
				plum8: string
				plum9: string
				plum10: string
				plum11: string
				plum12: string
				pink1: string
				pink2: string
				pink3: string
				pink4: string
				pink5: string
				pink6: string
				pink7: string
				pink8: string
				pink9: string
				pink10: string
				pink11: string
				pink12: string
				crimson1: string
				crimson2: string
				crimson3: string
				crimson4: string
				crimson5: string
				crimson6: string
				crimson7: string
				crimson8: string
				crimson9: string
				crimson10: string
				crimson11: string
				crimson12: string
				red1: string
				red2: string
				red3: string
				red4: string
				red5: string
				red6: string
				red7: string
				red8: string
				red9: string
				red10: string
				red11: string
				red12: string
				tomato1: string
				tomato2: string
				tomato3: string
				tomato4: string
				tomato5: string
				tomato6: string
				tomato7: string
				tomato8: string
				tomato9: string
				tomato10: string
				tomato11: string
				tomato12: string
				sand1: string
				sand2: string
				sand3: string
				sand4: string
				sand5: string
				sand6: string
				sand7: string
				sand8: string
				sand9: string
				sand10: string
				sand11: string
				sand12: string
				olive1: string
				olive2: string
				olive3: string
				olive4: string
				olive5: string
				olive6: string
				olive7: string
				olive8: string
				olive9: string
				olive10: string
				olive11: string
				olive12: string
				sage1: string
				sage2: string
				sage3: string
				sage4: string
				sage5: string
				sage6: string
				sage7: string
				sage8: string
				sage9: string
				sage10: string
				sage11: string
				sage12: string
				slate1: string
				slate2: string
				slate3: string
				slate4: string
				slate5: string
				slate6: string
				slate7: string
				slate8: string
				slate9: string
				slate10: string
				slate11: string
				slate12: string
				mauve1: string
				mauve2: string
				mauve3: string
				mauve4: string
				mauve5: string
				mauve6: string
				mauve7: string
				mauve8: string
				mauve9: string
				mauve10: string
				mauve11: string
				mauve12: string
				gray1: string
				gray2: string
				gray3: string
				gray4: string
				gray5: string
				gray6: string
				gray7: string
				gray8: string
				gray9: string
				gray10: string
				gray11: string
				gray12: string
			}
			fonts: {
				untitled: string
				mono: string
			}
			space: {
				1: string
				2: string
				3: string
				4: string
				5: string
				6: string
				7: string
				8: string
				9: string
			}
			sizes: {
				1: string
				2: string
				3: string
				4: string
				5: string
				6: string
				7: string
				8: string
				9: string
			}
			fontSizes: {
				1: string
				2: string
				3: string
				4: string
				5: string
				6: string
				7: string
				8: string
				9: string
			}
			radii: {
				1: string
				2: string
				3: string
				4: string
				round: string
				pill: string
			}
			zIndices: {
				1: string
				2: string
				3: string
				4: string
				max: string
			}
		}
		themeMap: import('@stitches/react/types/config').DefaultThemeMap
		utils: {
			p: (value: Stitches.PropertyValue<'padding'>) => {
				padding: Stitches.PropertyValue<'padding'>
			}
			pt: (value: Stitches.PropertyValue<'paddingTop'>) => {
				paddingTop: Stitches.PropertyValue<'paddingTop'>
			}
			pr: (value: Stitches.PropertyValue<'paddingRight'>) => {
				paddingRight: Stitches.PropertyValue<'paddingRight'>
			}
			pb: (value: Stitches.PropertyValue<'paddingBottom'>) => {
				paddingBottom: Stitches.PropertyValue<'paddingBottom'>
			}
			pl: (value: Stitches.PropertyValue<'paddingLeft'>) => {
				paddingLeft: Stitches.PropertyValue<'paddingLeft'>
			}
			px: (value: Stitches.PropertyValue<'paddingLeft'>) => {
				paddingLeft: Stitches.PropertyValue<'paddingLeft'>
				paddingRight: Stitches.PropertyValue<'paddingLeft'>
			}
			py: (value: Stitches.PropertyValue<'paddingTop'>) => {
				paddingTop: Stitches.PropertyValue<'paddingTop'>
				paddingBottom: Stitches.PropertyValue<'paddingTop'>
			}
			m: (value: Stitches.PropertyValue<'margin'>) => {
				margin: Stitches.PropertyValue<'margin'>
			}
			mt: (value: Stitches.PropertyValue<'marginTop'>) => {
				marginTop: Stitches.PropertyValue<'marginTop'>
			}
			mr: (value: Stitches.PropertyValue<'marginRight'>) => {
				marginRight: Stitches.PropertyValue<'marginRight'>
			}
			mb: (value: Stitches.PropertyValue<'marginBottom'>) => {
				marginBottom: Stitches.PropertyValue<'marginBottom'>
			}
			ml: (value: Stitches.PropertyValue<'marginLeft'>) => {
				marginLeft: Stitches.PropertyValue<'marginLeft'>
			}
			mx: (value: Stitches.PropertyValue<'marginLeft'>) => {
				marginLeft: Stitches.PropertyValue<'marginLeft'>
				marginRight: Stitches.PropertyValue<'marginLeft'>
			}
			my: (value: Stitches.PropertyValue<'marginTop'>) => {
				marginTop: Stitches.PropertyValue<'marginTop'>
				marginBottom: Stitches.PropertyValue<'marginTop'>
			}
			ta: (value: Stitches.PropertyValue<'textAlign'>) => {
				textAlign: Stitches.PropertyValue<'textAlign'>
			}
			fd: (value: Stitches.PropertyValue<'flexDirection'>) => {
				flexDirection: Stitches.PropertyValue<'flexDirection'>
			}
			fw: (value: Stitches.PropertyValue<'flexWrap'>) => {
				flexWrap: Stitches.PropertyValue<'flexWrap'>
			}
			ai: (value: Stitches.PropertyValue<'alignItems'>) => {
				alignItems: Stitches.PropertyValue<'alignItems'>
			}
			ac: (value: Stitches.PropertyValue<'alignContent'>) => {
				alignContent: Stitches.PropertyValue<'alignContent'>
			}
			jc: (value: Stitches.PropertyValue<'justifyContent'>) => {
				justifyContent: Stitches.PropertyValue<'justifyContent'>
			}
			as: (value: Stitches.PropertyValue<'alignSelf'>) => {
				alignSelf: Stitches.PropertyValue<'alignSelf'>
			}
			fg: (value: Stitches.PropertyValue<'flexGrow'>) => {
				flexGrow: Stitches.PropertyValue<'flexGrow'>
			}
			fs: (value: Stitches.PropertyValue<'flexShrink'>) => {
				flexShrink: Stitches.PropertyValue<'flexShrink'>
			}
			fb: (value: Stitches.PropertyValue<'flexBasis'>) => {
				flexBasis: Stitches.PropertyValue<'flexBasis'>
			}
			bc: (value: Stitches.PropertyValue<'backgroundColor'>) => {
				backgroundColor: Stitches.PropertyValue<'backgroundColor'>
			}
			br: (value: Stitches.PropertyValue<'borderRadius'>) => {
				borderRadius: Stitches.PropertyValue<'borderRadius'>
			}
			btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => {
				borderTopRightRadius: Stitches.PropertyValue<'borderTopRightRadius'>
			}
			bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => {
				borderBottomRightRadius: Stitches.PropertyValue<'borderBottomRightRadius'>
			}
			bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => {
				borderBottomLeftRadius: Stitches.PropertyValue<'borderBottomLeftRadius'>
			}
			btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => {
				borderTopLeftRadius: Stitches.PropertyValue<'borderTopLeftRadius'>
			}
			bs: (value: Stitches.PropertyValue<'boxShadow'>) => {
				boxShadow: Stitches.PropertyValue<'boxShadow'>
			}
			lh: (value: Stitches.PropertyValue<'lineHeight'>) => {
				lineHeight: Stitches.PropertyValue<'lineHeight'>
			}
			ox: (value: Stitches.PropertyValue<'overflowX'>) => {
				overflowX: Stitches.PropertyValue<'overflowX'>
			}
			oy: (value: Stitches.PropertyValue<'overflowY'>) => {
				overflowY: Stitches.PropertyValue<'overflowY'>
			}
			pe: (value: Stitches.PropertyValue<'pointerEvents'>) => {
				pointerEvents: Stitches.PropertyValue<'pointerEvents'>
			}
			us: (value: Stitches.PropertyValue<'userSelect'>) => {
				WebkitUserSelect: Stitches.PropertyValue<'userSelect'>
				userSelect: Stitches.PropertyValue<'userSelect'>
			}
			userSelect: (value: Stitches.PropertyValue<'userSelect'>) => {
				WebkitUserSelect: Stitches.PropertyValue<'userSelect'>
				userSelect: Stitches.PropertyValue<'userSelect'>
			}
			size: (value: Stitches.PropertyValue<'width'>) => {
				width: Stitches.PropertyValue<'width'>
				height: Stitches.PropertyValue<'width'>
			}
			appearance: (value: Stitches.PropertyValue<'appearance'>) => {
				WebkitAppearance: Stitches.PropertyValue<'appearance'>
				appearance: Stitches.PropertyValue<'appearance'>
			}
			backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => {
				WebkitBackgroundClip: Stitches.PropertyValue<'backgroundClip'>
				backgroundClip: Stitches.PropertyValue<'backgroundClip'>
			}
		}
	}
export declare type CSS = Stitches.CSS<typeof config>
export declare const darkTheme: {
	className: string
	selector: string
} & 'dark-theme'
