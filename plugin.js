CKEDITOR.plugins.add('btcards', {
	requires: 'widget,dialog,contextmenu,smethods',
	lang: 'en,ru,uk',
	icons: 'btcards',

	init: function(editor){
		var commandDefinition = {
			exec: function(editor){
				var c = this.name.replace(/.{4}/, '$&-'),
					div = editor.document.createElement('div', {attributes: {class: c}}),
					el = editor.widgets.getByElement(editor.getSelection().getStartElement()).element;

				(c == 'card-body' && el.findOne('.card-footer')) ? div.insertBefore(el.getLast()) : el.append(div, c == 'card-header');
			}
		};

		CKEDITOR.dialog.add('btcards', this.path + 'dialogs/btcards.js');

		editor.addCommands({
			cardHeader: commandDefinition,
			cardBody: commandDefinition,
			cardFooter: commandDefinition
		});

		editor.widgets.add('btcards', {
			allowedContent: 'div(!card,card-header,card-body,card-footer)',
			requiredContent: 'div(card)',
			editables: { content: 'div' },
			template: '<div class="card"><div></div></div>',

			button: editor.lang.btcards.label,
			dialog: 'btcards',

			upcast: function(element){
				return element.name == 'div' && element.hasClass('card');
			},
			init: function(){
				this.setData('style', this.element.getAttribute('style'));

				this.on('dialog', function(e){
					e.data.widget = this;
				}, this);
			},
			data: function(){
				this.data.style ? this.element.setAttribute('style', this.data.style) : this.element.removeAttribute('style');
			}
		});

		editor.addMenuGroup('btcards');
		editor.addMenuItems({
			cardHeader: {
				label: editor.lang.btcards.header,
				command: 'cardHeader',
				group: 'btcards',
				order: 1
			},
			cardBody: {
				label: editor.lang.btcards.cbody,
				command: 'cardBody',
				group: 'btcards',
				order: 1
			},
			cardFooter: {
				label: editor.lang.btcards.footer,
				command: 'cardFooter',
				group: 'btcards',
				order: 2
			}
		});

		editor.contextMenu.addListener(function(element){
			var card = editor.widgets.getByElement(element);

			if (card && card.element.hasClass('card'))
				if (card.element.findOne('.card-body'))
					return {
						cardHeader: card.element.findOne('.card-header') ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_OFF,
						cardFooter: card.element.findOne('.card-footer') ? CKEDITOR.TRISTATE_DISABLED : CKEDITOR.TRISTATE_OFF
					};
				else
					return { cardBody: CKEDITOR.TRISTATE_OFF };
		});
	}
});
