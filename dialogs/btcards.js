CKEDITOR.dialog.add('btcards', function(editor){
	var classStr = '',
		basicColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white'],
		padding = ['0', '1', '2', '3', '4', '5'],
		margin = padding.concat('auto');

	function generateSelect(id, items, label){
		return {
			id: id,
			label: editor.lang.btcards[label] || editor.lang.btcards[id] ,
			width: '100%',
			type: 'select',
			items: items,
			setup: function(){
				this.setValue(classStr.match(new RegExp(this.getValues().join('|'), 'g') || ''));
			},
			commit: function(){
				classStr = classStr.replace(new RegExp('(' + this.getValues().join('|') + ')\\s?', 'g'), '');

				if (this.getValue())
					classStr = classStr.concat(' ', this.getValue());
			}
		}
	}

	function generateItems(prefix, names){
		var items = [[['']]];

		for (var name of names)
			items.push([editor.lang.btcards[name.replace('-', '')] || name + (name > 5 ? '%' : ''), prefix + '-' + name]);

		return items;
	}


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
							generateSelect('width', generateItems('w', ['25', '45', '50', '100', 'auto'])),
							generateSelect('bgcolor', generateItems('bg', basicColors.concat('transparent'))),
							generateSelect('brcolor', generateItems('border', basicColors)),
							generateSelect('txtcolor', generateItems('text', basicColors.concat(['body', 'muted', 'black-50', 'white-50']))),
							generateSelect('txtalign', generateItems('text', ['left', 'center', 'right'])),
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
											generateSelect('mt', generateItems('mt', margin), 'top'),
											generateSelect('mb', generateItems('mb', margin), 'bottom'),
											generateSelect('ml', generateItems('ml', margin), 'left'),
											generateSelect('mr', generateItems('mr', margin), 'right')
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
											generateSelect('pt', generateItems('pt', padding), 'top'),
											generateSelect('pb', generateItems('pb', padding), 'bottom'),
											generateSelect('pl', generateItems('pl', padding), 'left'),
											generateSelect('pr', generateItems('pr', padding), 'right'),
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
		],

		onShow: function(){
			classStr = CKEDITOR.tools.object.keys(this.widget.getClasses()).join(' ');
		},
		onOk: function(){
			this.commitContent(this.widget);
			this.widget.setData('classes', CKEDITOR.tools.convertArrayToObject(classStr.split(' ')));
		}
	};
});
