CKEDITOR.dialog.add('btcards', function(editor){
	return {
		title: editor.lang.btcards.title,
		minWidth: 450,
		minHeight: 200,
		contents: [
			{
				id: 'tab-basic',
				elements: [
					{
						type: 'hbox',
						children: [
							{
								id: 'width',
								label: editor.lang.btcards.width,
								type: 'select',
								items: [
									[['']],
									['25%', 'w-25'],
									['50%', 'w-50'],
									['75%', 'w-75'],
									['100%', 'w-100'],
									[editor.lang.btcards.auto, 'w-auto']
								],
								setup: function(widget){
									this.setValue(widget.data.class.match(/\bw-(\d{2,3}|auto)\b/g) || '');
								},
								commit: function(widget){
									widget.pushData('class', this.getValue(), /\s?\bw-(\d{2,3}|auto)\b/g);
								}
							},
							{
								id: 'bgcolor',
								label: editor.lang.btcards.bgcolor,
								type: 'select',
								items: [
									[['']],
									[editor.lang.btcards.primary, 'bg-primary'],
									[editor.lang.btcards.secondary, 'bg-secondary'],
									[editor.lang.btcards.success, 'bg-success'],
									[editor.lang.btcards.danger, 'bg-danger'],
									[editor.lang.btcards.warning, 'bg-warning'],
									[editor.lang.btcards.info, 'bg-info'],
									[editor.lang.btcards.light, 'bg-light'],
									[editor.lang.btcards.dark, 'bg-dark'],
									[editor.lang.btcards.white, 'bg-white'],
									[editor.lang.btcards.transparent, 'bg-transparent']
								],
								setup: function(widget){
									this.setValue(widget.data.class.match(/bg-\w+/) || '');
								},
								commit: function(widget){
									widget.pushData('class', this.getValue(), /\s?bg-\w+/g);
								}
							},
							{
								id: 'brcolor',
								label: editor.lang.btcards.brcolor,
								type: 'select',
								items: [
									[['']],
									[editor.lang.btcards.primary, 'border-primary'],
									[editor.lang.btcards.secondary, 'border-secondary'],
									[editor.lang.btcards.success, 'border-success'],
									[editor.lang.btcards.danger, 'border-danger'],
									[editor.lang.btcards.warning, 'border-warning'],
									[editor.lang.btcards.info, 'border-info'],
									[editor.lang.btcards.light, 'border-light'],
									[editor.lang.btcards.dark, 'border-dark'],
									[editor.lang.btcards.white, 'border-white']
								],
								setup: function(widget){
									this.setValue(widget.data.class.match(/border-\w+/) || '');
								},
								commit: function(widget){
									widget.pushData('class', this.getValue(), /\s?border-\w+/g);
								}
							},
							{
								id: 'txtcolor',
								label: editor.lang.btcards.txtcolor,
								type: 'select',
								items: [
									[['']],
									[editor.lang.btcards.primary, 'text-primary'],
									[editor.lang.btcards.secondary, 'text-secondary'],
									[editor.lang.btcards.success, 'text-success'],
									[editor.lang.btcards.danger, 'text-danger'],
									[editor.lang.btcards.warning, 'text-warning'],
									[editor.lang.btcards.info, 'text-info'],
									[editor.lang.btcards.light, 'text-light'],
									[editor.lang.btcards.dark, 'text-dark'],
									[editor.lang.btcards.white, 'text-white'],
									[editor.lang.btcards.tbody, 'text-body'],
									[editor.lang.btcards.muted, 'text-muted'],
									[editor.lang.btcards.black50, 'text-black-50'],
									[editor.lang.btcards.white50, 'text-white-50']
								],
								setup: function(widget){
									this.setValue(widget.data.class.match(new RegExp(this.getValues().join('(?=\\s|$)|'), 'g') || ''));
								},
								commit: function(widget){
									widget.pushData('class', this.getValue(), new RegExp('\\s?'+this.getValues().join('(?=\\s|$)|'), 'g'));
								}
							},
							{
								id: 'txtalign',
								label: editor.lang.btcards.txtalign,
								width: '100%',
								type: 'select',
								items: [
									[['']],
									[editor.lang.btcards.left, 'text-left'],
									[editor.lang.btcards.center, 'text-center'],
									[editor.lang.btcards.right, 'text-right']
								],
								setup: function(widget){
									this.setValue(widget.data.class.match(/text-(left|center|right)/g) || '');
								},
								commit: function(widget){
									widget.pushData('class', this.getValue(), /\s?text-(left|center|right)/);
								}
							}
						]
					},
					{
						type: 'hbox',
						children: [
							{
								type: 'fieldset',
								label: editor.lang.btcards.margin,
								children: [
									{
										type: 'hbox',
										children: [
											{
												id: 'mt',
												label: editor.lang.btcards.top,
												type: 'select',
												items: [
													[['']],
													['0', 'mt-0'],
													['1', 'mt-1'],
													['2', 'mt-2'],
													['3', 'mt-3'],
													['4', 'mt-4'],
													['5', 'mt-5'],
													[editor.lang.btcards.auto, 'mt-auto']
												],
												setup: function(widget){
													if (widget.data.class.match(/(my|mt)-([0-5]|auto)/g))
														this.setValue(widget.data.class.match(/(my|mt)-([0-5]|auto)/g)[0].replace('my', 'mt'));
												},
												commit: function(widget){
													widget.pushData('class', this.getValue(), /\s?mt-([0-5]|auto)/g);
												}
											},
											{
												id: 'mb',
												label: editor.lang.btcards.bottom,
												type: 'select',
												items: [
													[['']],
													['0', 'mb-0'],
													['1', 'mb-1'],
													['2', 'mb-2'],
													['3', 'mb-3'],
													['4', 'mb-4'],
													['5', 'mb-5'],
													[editor.lang.btcards.auto, 'mb-auto']
												],
												setup: function(widget){
													if (widget.data.class.match(/(my|mb)-([0-5]|auto)/g))
														this.setValue(widget.data.class.match(/(my|mb)-([0-5]|auto)/g)[0].replace('my', 'mb'));
												},
												commit: function(widget){
													if(this.getValue().includes(this.getDialog().getValueOf('tab-basic', 'mt').match(/-./)))
														widget.pushData('class', this.getValue().replace('mb', 'my'), /\s?(mt|my|mb)-([0-5]|auto)/g);
													else
														widget.pushData('class', this.getValue(), /\s?(my|mb)-([0-5]|auto)/g);
												}
											},
											{
												id: 'ml',
												label: editor.lang.btcards.left,
												type: 'select',
												items: [
													[['']],
													['0', 'ml-0'],
													['1', 'ml-1'],
													['2', 'ml-2'],
													['3', 'ml-3'],
													['4', 'ml-4'],
													['5', 'ml-5'],
													[editor.lang.btcards.auto, 'ml-auto']
												],
												setup: function(widget){
													if (widget.data.class.match(/(mx|ml)-([0-5]|auto)/g))
														this.setValue(widget.data.class.match(/(mx|ml)-([0-5]|auto)/g)[0].replace('mx', 'ml'));
												},
												commit: function(widget){
													widget.pushData('class', this.getValue(), /\s?ml-([0-5]|auto)/g);
												}
											},
											{
												id: 'mr',
												label: editor.lang.btcards.right,
												type: 'select',
												items: [
													[['']],
													['0', 'mr-0'],
													['1', 'mr-1'],
													['2', 'mr-2'],
													['3', 'mr-3'],
													['4', 'mr-4'],
													['5', 'mr-5'],
													[editor.lang.btcards.auto, 'mr-auto']
												],
												setup: function(widget){
													if (widget.data.class.match(/(mx|mr)-([0-5]|auto)/g))
														this.setValue(widget.data.class.match(/(mx|mr)-([0-5]|auto)/g)[0].replace('mx', 'mr'));
												},
												commit: function(widget){
													if (this.getValue().includes(this.getDialog().getValueOf('tab-basic', 'ml').match(/-./)))
														widget.pushData('class', this.getValue().replace('mr', 'mx'), /\s?(ml|mx|mr)-([0-5]|auto)/g);
													else
														widget.pushData('class', this.getValue(), /\s?(mx|mr)-([0-5]|auto)/g);
												}
											}
										]
									}
								]
							},
							{
								type: 'fieldset',
								label: editor.lang.btcards.padding,
								children: [
									{
										type: 'hbox',
										children: [
											{
												id: 'pt',
												label: editor.lang.btcards.top,
												type: 'select',
												items: [
													[['']],
													['0', 'pt-0'],
													['1', 'pt-1'],
													['2', 'pt-2'],
													['3', 'pt-3'],
													['4', 'pt-4'],
													['5', 'pt-5']
												],
												setup: function(widget){
													if (widget.data.class.match(/(py|pt)-[0-5]/g))
														this.setValue(widget.data.class.match(/(py|pt)-[0-5]/g)[0].replace('py', 'pt'));
												},
												commit: function(widget){
													widget.pushData('class', this.getValue(), /\s?pt-[0-5]/g);
												}
											},
											{
												id: 'pb',
												label: editor.lang.btcards.bottom,
												type: 'select',
												items: [
													[['']],
													['0', 'pb-0'],
													['1', 'pb-1'],
													['2', 'pb-2'],
													['3', 'pb-3'],
													['4', 'pb-4'],
													['5', 'pb-5']
												],
												setup: function(widget){
													if (widget.data.class.match(/(py|pb)-[0-5]/g))
														this.setValue(widget.data.class.match(/(py|pb)-[0-5]/g)[0].replace('py', 'pb'));
												},
												commit: function(widget){
													if (this.getValue().includes(this.getDialog().getValueOf('tab-basic', 'pt').match(/-./)))
														widget.pushData('class', this.getValue().replace('pb', 'py'), /\s?(pt|py|pb)-[0-5]/g);
													else
														widget.pushData('class', this.getValue(), /\s?(py|pb)-[0-5]/g);
												}
											},
											{
												id: 'pl',
												label: editor.lang.btcards.left,
												type: 'select',
												items: [
													[['']],
													['0', 'pl-0'],
													['1', 'pl-1'],
													['2', 'pl-2'],
													['3', 'pl-3'],
													['4', 'pl-4'],
													['5', 'pl-5']
												],
												setup: function(widget){
													if (widget.data.class.match(/(px|pl)-[0-5]/g))
														this.setValue(widget.data.class.match(/(px|pl)-[0-5]/g)[0].replace('px', 'pl'));
												},
												commit: function(widget){
													widget.pushData('class', this.getValue(), /\s?pl-[0-5]/g);
												}
											},
											{
												id: 'pr',
												label: editor.lang.btcards.right,
												type: 'select',
												items: [
													[['']],
													['0', 'pr-0'],
													['1', 'pr-1'],
													['2', 'pr-2'],
													['3', 'pr-3'],
													['4', 'pr-4'],
													['5', 'pr-5']
												],
												setup: function(widget){
													if (widget.data.class.match(/(px|pr)-[0-5]/g))
														this.setValue(widget.data.class.match(/(px|pr)-[0-5]/g)[0].replace('px', 'pr'));
												},
												commit: function(widget){
													if (this.getValue().includes(this.getDialog().getValueOf('tab-basic', 'pl').match(/-./)))
														widget.pushData('class', this.getValue().replace('pr', 'px'), /\s?(pl|px|pr)-[0-5]/g);
													else
														widget.pushData('class', this.getValue(), /\s?(px|pr)-[0-5]/g);
												}
											}
										]
									}
								]
							}
						]
					},
					{
						id: 'style',
						type: 'text',
						label: editor.lang.btcards.cstyle,
						setup: function(widget){
							this.setValue(widget.data.style);
						},
						commit: function(widget){
							widget.setData('style', this.getValue());
						}
					}
				]
			}
		]
	};
});
